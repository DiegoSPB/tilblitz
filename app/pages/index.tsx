import { Link, BlitzPage, useMutation } from "blitz"
import Layout from "app/layouts/Layout"
import logout from "app/auth/mutations/logout"
import { useCurrentUser } from "app/hooks/useCurrentUser"
import { Suspense } from "react"
import PostForm from "app/posts/components/PostForm"
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

        <PostForm onSuccess={() => console.log("success")} />
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
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-700">TODAY I LEARNED</h1>
      <Suspense fallback="Loading...">
        <UserInfo />
        <Posts />
      </Suspense>
    </div>
  )
}

Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
