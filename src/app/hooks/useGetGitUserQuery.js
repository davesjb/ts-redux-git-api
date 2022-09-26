import * as React from "react"
import { useGetAccessTokenQuery } from "../../services/GitApi"

export default function GitAuth() {
  const { data, error, isLoading } = useGetAccessTokenQuery("user1")

  console.log(data)
  return <></>
}
