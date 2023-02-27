import GithubSignInBtn from './github-signin-btn'
import GoogleSignInBtn from './google-signin-btn'

interface SignInBtn {
  signInFn: () => void
  isSelected?: boolean
  disabled?: boolean
}

export { GithubSignInBtn, GoogleSignInBtn }
export type { SignInBtn }
