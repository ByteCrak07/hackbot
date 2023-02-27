import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import type { AuthProviderInfo, Record as PbRecord } from 'pocketbase'
import pb from '../lib/pocketbase'
import { usePbAuth } from '../contexts/AuthWrapper'
import SEO from '../seo'
import PageTransition from '../components/layout/pageTransition'

const SignIn: NextPage = () => {
  const [disableSignIn, setDisableSignIn] = useState(false)

  const { googleSignIn, setUserData } = usePbAuth()

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

        // skip profile updation if user already exists
        if (user.name && user.avatarUrl) {
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

      <section className="">
        <button disabled={disableSignIn} onClick={googleSignIn}>
          Signin with google
        </button>
      </section>
    </PageTransition>
  )
}

export default SignIn
