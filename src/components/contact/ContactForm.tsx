"use client";

import Link from "next/link";
import { contactContent } from "@/data/site";
import type { Locale } from "@/lib/locales";

type ContactFormProps = {
  locale: Locale;
};

type FieldConfig = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  type?: string;
};

export function ContactForm({ locale }: ContactFormProps) {
  const { form } = contactContent;
  const base = `/${locale}`;

  const fields: FieldConfig[] = [
    {
      id: "firstName",
      name: "firstName",
      label: form.fields.firstName.label,
      placeholder: form.fields.firstName.label,
      required: form.fields.firstName.required,
    },
    {
      id: "lastName",
      name: "lastName",
      label: form.fields.lastName.label,
      placeholder: form.fields.lastName.label,
      required: form.fields.lastName.required,
    },
    {
      id: "phone",
      name: "phone",
      label: form.fields.phone.label,
      placeholder: form.fields.phone.label,
      required: form.fields.phone.required,
      type: "tel",
    },
    {
      id: "email",
      name: "email",
      label: form.fields.email.label,
      placeholder: form.fields.email.label,
      required: form.fields.email.required,
      type: "email",
    },
    {
      id: "investmentAmount",
      name: "investmentAmount",
      label: form.fields.investmentAmount.label,
      placeholder: form.fields.investmentAmount.label,
      required: form.fields.investmentAmount.required,
    },
  ];

  return (
    <section className="contact-form-section bg-white">
      <div className="section-padding contact-form-section__inner">
        <h2 className="contact-form-section__title">{form.title}</h2>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! We will contact you shortly.");
          }}
        >
          {fields.map((field) => (
            <div key={field.id} className="contact-form__field">
              <label htmlFor={field.id} className="contact-form__label">
                {field.label}
                {field.required ? (
                  <span className="contact-form__required" aria-hidden>
                    {" "}
                    *
                  </span>
                ) : null}
              </label>
              <input
                id={field.id}
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                placeholder={field.placeholder}
                className="contact-form__input"
              />
            </div>
          ))}

          <div className="contact-form__legal">
            <p className="contact-form__legal-links">
              <Link href={`${base}/privacy-policy`} className="contact-form__legal-link">
                {form.legalLinks.privacy}
              </Link>
              <span className="contact-form__legal-sep" aria-hidden>
                {" "}
                |{" "}
              </span>
              <Link href={`${base}/term-of-services`} className="contact-form__legal-link">
                {form.legalLinks.terms}
              </Link>
            </p>
          </div>

          <div className="contact-form__consent-block">
            <label className="contact-form__checkbox-row">
              <input
                id="policyConsent"
                name="policyConsent"
                type="checkbox"
                required
                className="contact-form__checkbox"
              />
              <span className="contact-form__checkbox-label">
                {form.consentCheckboxLabel}
              </span>
            </label>
            <p className="contact-form__consent">{form.consentText}</p>
          </div>

          <button type="submit" className="contact-form__submit">
            {form.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
