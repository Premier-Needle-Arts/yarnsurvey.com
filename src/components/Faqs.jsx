import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How long is the survey?',
      answer:
        'The survey is 30 questions long with an average completion time of 20 minutes depending on your answers!',
    },
    {
      question: 'Do I need to complete the survey to be elligible?',
      answer: 'Yes, you will need to complete the survey in order to be elligible for the raffle. At the end, there will be an opportunity to enter your email to be contacted about the raffle.',
    },
    {
      question: 'Will I be elligible if I don\'t participate in any yarn crafts?',
      answer: 'Sorry, but we are only looking for survey participants that engage in knitting, crochet, or other various yarn crafts.',
    },
  ],
  [
    {
      question: 'How will I know if I won?',
      answer: 'Winners will be chosen at random and notified via email immediately after the survey is closed. If you are a lucky winner, please be sure to respond to the email within 2 business days to claim your prize. If we do not hear back from you within this time frame, we will have to choose another winner. We appreciate your understanding to get prizes out quickly and wish you the best of luck!',
    },
    {
      question: 'What are you doing with my data?',
      answer: 'We value our customers\' privacy and take the responsibility of safeguarding their personal data very seriously. We want to assure you that any information collected during our survey will be kept confidential and used solely for the purpose of improving our products and services.',
    },
  ],
  [
    {
      question: 'Why did I receive this email?',
      answer: 'Premier Needle Arts is the parent company of Knit Picks, Crochet.com, and Berroco, so we\'re sending this email out to all active customers!',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
