"use client";

import style from "./style.module.scss";
import { useState, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";
import MyButton from "@/components/myButton/MyButton";
import confirmEmail from "@/utils/confirmEmail";

export default function Contact() {
  const [emailContact, setEmailContact] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const dialogModal = useRef<HTMLDialogElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!confirmEmail.test(emailContact) || !emailContact)
      return dialogModal.current && dialogModal.current.showModal();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/priseDeContact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailContact,
        message,
      }),
    });
    if (!response.ok) {
      const data = await response.json();
      console.error(data.message);
    } else {
      router.replace("/contact/remerciement");
    }
  }

  return (
    <section id="Contact" className={style.Contact}>
      <h2>Contactez-moi</h2>
      <form id="contact_email" onSubmit={onSubmit}>
        <input
          id="userContact"
          className={`input ${style.input}`}
          
          aria-label="Email"
          required
          type="email"
          placeholder="Votre email"
          onChange={e => setEmailContact(e.target.value)}
          value={emailContact}
        />
        <textarea
          id="message"
          aria-label="Message"
          placeholder="Votre message"
          onChange={e => setMessage(e.target.value)}
          value={message}
          className={style.input}
          required></textarea>
      </form>
      <MyButton
        id="contact_email"
        type="submit"
        titre="Envoyer"
        lien="#"
        rel={undefined}
        className={undefined}
      />
      <dialog ref={dialogModal}>
        <h3>Petite maladraisse</h3>
        <p>
          Vérifiez votre <strong>email</strong>
        </p>

        <div>
          <button
            onClick={() => dialogModal.current && dialogModal.current.close()}
            id="button_modal">
            OK
          </button>
        </div>
      </dialog>
    </section>
  );
}
