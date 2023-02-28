import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import type { AuthProviderInfo, Record as PbRecord } from 'pocketbase'
import pb from '../lib/pocketbase'
import { usePbAuth } from '../contexts/AuthWrapper'
import SEO from '../seo'
import PageTransition from '../components/layout/pageTransition'
import { GithubSignInBtn, GoogleSignInBtn } from '../components/ui/auth'

const SignIn: NextPage = () => {
  const [disableSignIn, setDisableSignIn] = useState(false)
  const [signInMethod, setSignInMethod] = useState('')

  const { googleSignIn, githubSignIn, setUserData } = usePbAuth()

  const router = useRouter()

  useEffect(() => {
    const localAuthProvider: AuthProviderInfo = JSON.parse(
      localStorage.getItem('provider') as string
    )
    const params = new URL(location.href).searchParams
    const redirectUrl = `${location.origin}/signin`
    const code = params.get('code')

    // cancel signin logic if not a redirect
    if (
      !localAuthProvider ||
      !code ||
      localAuthProvider.state !== params.get('state')
    )
      return

    setDisableSignIn(true)
    setSignInMethod(localAuthProvider.name)

    const storeUserAndRedirect = (user: PbRecord) => {
      toast.success(`Signed in as ${user.name}`)
      setUserData(user)
      router.replace('/')
    }

    pb.collection('users')
      .authWithOAuth2(
        localAuthProvider.name,
        code,
        localAuthProvider.codeVerifier,
        redirectUrl
      )
      .then(async (response) => {
        const user = await pb.collection('users').getOne(response.record.id)

        // skip profile updation if user already exists or user data haven't changed
        if (
          user.name &&
          user.avatarUrl &&
          user.name === response.meta?.name &&
          user.avatarUrl === response.meta?.avatarUrl
        ) {
          storeUserAndRedirect(user)
        } else
          pb.collection('users')
            .update(response.record.id, {
              name: response.meta?.name,
              avatarUrl: response.meta?.avatarUrl,
            })
            .then((res) => {
              storeUserAndRedirect(res)
            })
            .catch((err) => {
              console.error(err)
            })
      })
      .catch((err) => {
        console.error(err)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageTransition>
      <SEO title="Sign In" />

      <section className="block gap-x-20 py-20 px-[12%] md:flex md:py-32">
        <div className="flex-1">
          <h1 className="pb-5 text-4xl font-medium md:text-5xl">
            Welcome back
          </h1>
          <p className="pb-10 text-gray-600 dark:text-gray-200">
            To access the full HackBot experience, sign in with your Google or
            GitHub account.
          </p>
          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col items-center gap-y-4 rounded-2xl bg-gray-500 bg-opacity-10 p-5 dark:bg-white dark:bg-opacity-10 md:p-10">
              <GoogleSignInBtn
                onClick={() => {
                  setDisableSignIn(true)
                  setSignInMethod('google')
                  googleSignIn()
                }}
                disabled={disableSignIn}
                isSelected={signInMethod === 'google'}
              />
              <GithubSignInBtn
                onClick={() => {
                  setDisableSignIn(true)
                  setSignInMethod('github')
                  githubSignIn()
                }}
                disabled={disableSignIn}
                isSelected={signInMethod === 'github'}
              />
            </div>
          </div>
        </div>
        <div className="hidden flex-1 items-center justify-center md:flex">
          <div>
            <Image
              src={'/vectors/team.svg'}
              alt={'team'}
              width={400 * 1.2258}
              height={400}
              priority
            />
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default SignIn
