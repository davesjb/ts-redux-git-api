import * as React from "react"
import { useGetAccessToken } from "../../services/GitApi"

export default function GitAuth() {
  const { data, error, isLoading } = useGetAccessToken("user1")

  console.log(data)
  return <></>
}
