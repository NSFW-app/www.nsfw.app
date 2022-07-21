import { initUrqlClient } from 'next-urql'
import { GRAPHCMS_CONTENT_API_URL } from 'config'

/**
 * If you want to use a Client in Next.js' newer methods like getServerSideProps
 * you may use the initUrqlClient function to create a client on the fly. This will need to be done per request.
 * https://github.com/FormidableLabs/urql/tree/main/packages/next-urql#restricting-data-fetching-to-the-server
 */
export const getCMSClient = () => {
  return initUrqlClient(
    {
      url: GRAPHCMS_CONTENT_API_URL,
    },
    false /* set to false to disable suspense */
  )
}
