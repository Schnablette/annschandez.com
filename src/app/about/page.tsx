import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-500 dark:text-zinc-200 dark:hover:text-pink-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Ann Schandez. Let\'s talk about passion.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I'm Ann Schandez. Let's talk about passion.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Some people are passionate about designing interfaces or coding
              simple solutions to complex problems. While I enjoy both of these
              pastimes, that’s not who I am. My true passion is
              relationship-building. I am nowhere without my community. My
              favorite book, <em>Braiding Sweetgrass</em> by Robin Wall
              Kimmerer, outlines how we flourish by working together. This truth
              guides my business decisions as much as anything else in my life.
            </p>
            <p>
              I believe in constant experimentation as a means for
              self-improvement. My superpower is strategic abandonment, so I'm
              not scared to pivot if a tactic isn’t producing results. That
              being said, I write in pen and am unafraid to show the process.
              You can find proverbial sketch marks scattered all over my
              LinkedIn, blog posts, and journals. These “failed” experiments
              have built the foundation of who I am today, and I’m pretty happy
              with that.
            </p>
            <p>
              Outside of money-making, I’m slow and unproductive. I craft, play
              video games, and spend time with my favorite person in the world.
              My wife is incredibly supportive of my pursuit to live an
              interesting life. She grounds me when I’m thinking too big and
              encourages me when I’m not thinking big enough. She is truly my
              other half.
            </p>
            <p>
              I hope reading a little about me encourages you to reach out.
              Regardless of your interest in working with me, I’d love to
              connect. Please drop me a line on{' '}
              <a
                href="https://www.linkedin.com/in/annschandez/"
                className="text-pink-400 underline dark:text-pink-200"
                target='_blank'
              >
                LinkedIn
              </a>{' '}
              or at{' '}
              <a
                href="mailto:annschandez@gmail.com"
                className="text-pink-400 underline dark:text-pink-200"
                target='_blank'
              >
                my personal email
              </a>
              .
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}
            <SocialLink
              href="https://github.com/Schnablette/mint-ui"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/annschandez/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:annschandez@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              annschandez@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
