import GithubSignInBtn from './github-signin-btn'
import GoogleSignInBtn from './google-signin-btn'

interface SignInBtn {
  onClick: () => void
  isSelected?: boolean
  disabled?: boolean
}

export { GithubSignInBtn, GoogleSignInBtn }
export type { SignInBtn }
