import { Link, BlitzPage, useMutation } from "blitz"
import Layout from "app/layouts/Layout"
import logout from "app/auth/mutations/logout"
import { useCurrentUser } from "app/hooks/useCurrentUser"
import { Suspense } from "react"
import Posts from "app/posts/components/Posts"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          className="button small"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        {/* <div> */}
        {/*   User id: <code>{currentUser.id}</code> */}
        {/*   <br /> */}
        {/*   User role: <code>{currentUser.role}</code> */}
        {/* </div> */}
      </>
    )
  } else {
    return (
      <>
        <Link href="/signup">
          <a className="button small">
            <strong>Sign Up</strong>
          </a>
        </Link>
        <Link href="/login">
          <a className="button small">
            <strong>Login</strong>
          </a>
        </Link>
      </>
    )
  }
}

const Home: BlitzPage = () => {
  return (
    <div className="container mx-auto">
      <Suspense fallback="Loading...">
        {/* <UserInfo /> */}
        <Posts />
      </Suspense>
    </div>
  )
}

Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
