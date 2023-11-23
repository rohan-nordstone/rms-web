"use client"

import { useRouter } from "next/navigation"
import { Spinner } from "@nextui-org/react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios, { isAxiosError } from "axios"
import { useSession } from "next-auth/react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import SharePopupModal from "./SharePopupModal"

type NewsData = {
  likesCount: number
  commentsCount: number
  sharesCount: number
}

type Props = {
  className?: string
  news_id: number | undefined
  showCount: boolean
}

export default function LikesCommentsShares({
  className,
  news_id,
  showCount,
}: Props) {
  const { data: session, status } = useSession()
  const queryClient = useQueryClient()
  const router = useRouter()

  const getNewsData = async (id: number | undefined) => {
    // demo url http://localhost:5000/news/26
    try {
      const { data } = await axios.get<NewsData>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/${id}`
      )
      return data
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response?.data.message)
      }
      throw new Error("Error fetching news data")
    }
  }

  const getIsliked = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${session?.token}`,
      }
      // http://localhost:5000/news/26/isNewsLiked
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/${news_id}/isNewsLiked`
      const response = await fetch(url, {
        cache: "no-store",
        method: "GET",
        headers: headers,
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.log("error.response?.data.", errorData.message)
        return false
      }

      const data = (await response.json()) as boolean
      console.log("data", data)
      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  const likeSubmitHandler = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${session?.token}`,
      }

      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/${news_id}/like`
      const response = await fetch(url, {
        cache: "no-store",
        method: "GET",
        headers: headers,
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.log("error.response?.data.", errorData.message)
        return false
      }

      const data = (await response.json()) as boolean
      console.log("data", data)
      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  const shareSubmitHandler = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${session?.token}`,
      }

      // http://localhost:5000/news/10/share
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/${news_id}/share`
      const response = await fetch(url, {
        cache: "no-store",
        method: "GET",
        headers: headers,
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.log("error.response?.data.", errorData.message)
        return false
      }

      const data = (await response.json()) as boolean
      console.log("data", data)
      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  const {
    data: isLiked,
    isLoading: isLikedIsLoading,
    error: isLikedError,
    isError: isLikedIsError,
  } = useQuery({
    queryKey: ["newsletter/isLiked", news_id],
    queryFn: async () => await getIsliked(),
    staleTime: 1000,
    refetchOnWindowFocus: true,
  })

  const {
    data: newsData,
    isLoading: newsDataIsLoading,
    error: newsDataError,
    isError: newsDataIsError,
  } = useQuery({
    queryKey: ["newsletter/data", news_id],
    queryFn: async () => await getNewsData(news_id),
    staleTime: 1000,
    refetchOnWindowFocus: true,
  })

  const likeMutation = useMutation({
    mutationFn: likeSubmitHandler,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["newsletter/isLiked", news_id],
      })
      queryClient.invalidateQueries({ queryKey: ["newsletter/data", news_id] })
      router.refresh()
    },
    onError: () => {
      toast.error("Error liking the article")
    },
  })

  const shareMutation = useMutation({
    mutationFn: shareSubmitHandler,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["newsletter/data", news_id] })
      router.refresh()
    },
    onError: () => {
      toast.error("Error sharing the article")
    },
  })

  if (status === "loading") {
    queryClient.invalidateQueries({ queryKey: ["newsletter/isLiked", news_id] })
    queryClient.invalidateQueries({ queryKey: ["newsletter/data", news_id] })
    return <></>
  }

  if (isLikedIsLoading) {
    return <></>
  }

  return (
    <div className={cn("flex", className ?? className)}>
      <Button
        onClick={() => {
          likeMutation.mutate()
        }}
        className="hover:bg-transparent"
        variant={"ghost"}
      >
        <div>
          {likeMutation.isPending ? (
            <Spinner size="sm" color="default" className="inline-block" />
          ) : (
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                "flex h-5 w-5 items-center justify-center fill-current text-[#828282]",
                isLiked && "text-secondary"
              )}
            >
              <path d="M22.0323 9.41475C22.0323 9.63222 22.0323 9.85556 22.0323 10.073C22.0206 10.0907 22.003 10.1083 21.9971 10.1259C21.6679 11.6482 21.3388 13.1764 21.0097 14.6986C20.8333 15.5215 20.6688 16.3502 20.463 17.1672C20.081 18.7247 18.6704 19.7886 17.0071 19.7944C14.7207 19.8003 12.4344 19.8003 10.1421 19.7944C8.07912 19.7944 6.54509 18.2487 6.53921 16.1915C6.53921 13.7876 6.53921 11.3837 6.53921 8.97394C6.53921 8.02178 6.8566 7.19893 7.49724 6.49362C8.36712 5.52971 9.23699 4.5658 10.101 3.60189C11.0649 2.53218 12.0288 1.46835 12.981 0.398639C13.2219 0.128274 13.4923 0.0283557 13.845 0.128274C14.1212 0.204681 14.3974 0.269334 14.6737 0.339864C16.1783 0.721903 16.8131 2.17365 16.0667 3.53136C15.6141 4.34245 15.1615 5.15943 14.7148 5.97053C14.3681 6.59942 14.6796 7.12252 15.3966 7.12252C16.7485 7.12252 18.0944 7.11076 19.4462 7.1284C20.3925 7.14015 21.1448 7.55745 21.6327 8.37443C21.8208 8.69182 21.903 9.06798 22.0323 9.41475ZM5.3402 17.9607V8.42145C5.3402 7.40464 4.51734 6.58179 3.50053 6.58179H2.63654C1.61973 6.58179 0.796875 7.40464 0.796875 8.42145V17.9607C0.796875 18.9775 1.61973 19.8003 2.63654 19.8003H3.50053C4.51734 19.8003 5.3402 18.9775 5.3402 17.9607Z" />
            </svg>
          )}
        </div>
        <p
          className={cn(
            "ml-2",
            isLiked ? "text-secondary" : "text-muted-foreground",
            showCount === false && "hidden"
          )}
        >
          {newsData?.likesCount}
        </p>
      </Button>
      <Button className="hover:bg-transparent" variant={"ghost"}>
        <div>
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex h-5 w-5 items-center justify-center"
          >
            <path
              d="M22.1484 10.9043C22.0992 16.1462 18.2662 20.6928 13.129 21.548C10.5819 21.9725 8.18858 21.548 5.93065 20.299C5.83836 20.2498 5.69685 20.2375 5.59842 20.2744C4.33717 20.7236 3.07593 21.1911 1.81468 21.6403C1.17483 21.8679 0.547283 21.4865 0.485759 20.822C0.467301 20.6497 0.516521 20.4528 0.578045 20.2867C1.01487 19.0624 1.46399 17.8381 1.91312 16.6137C1.96234 16.4722 1.96849 16.3676 1.88851 16.2323C-1.52608 10.2029 1.50091 2.61085 8.12091 0.568245C14.1995 -1.30824 20.6534 2.53086 21.8716 8.76326C22.0131 9.47079 22.0623 10.1906 22.1484 10.9043Z"
              fill="#828282"
            />
          </svg>
        </div>
        <p
          className={cn(
            "ml-2 text-muted-foreground",
            showCount === false && "hidden"
          )}
        >
          {newsData?.commentsCount}
        </p>
      </Button>
      <SharePopupModal
        targetUrl={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/newsletter/details?news_id=${news_id}`}
      >
        <Button
          onClick={() => shareMutation.mutate()}
          className="hover:bg-transparent"
          variant={"ghost"}
        >
          <div>
            {shareMutation.isPending ? (
              <Spinner size="sm" color="default" className="inline-block" />
            ) : (
              <svg
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex h-5 w-5 items-center justify-center"
              >
                <path
                  d="M15.0698 21.1256C14.751 21.0336 14.4207 20.9736 14.1173 20.8375C12.6887 20.1974 11.9129 18.657 12.2009 17.0485C12.224 16.9205 12.1894 16.8725 12.0972 16.8165C10.1924 15.6882 8.28747 14.5599 6.38259 13.4236C6.26354 13.3515 6.19057 13.3595 6.08688 13.4556C5.08835 14.3678 3.66737 14.5519 2.4845 13.9357C1.29396 13.3155 0.556583 12.0032 0.675637 10.6308C0.794692 9.25844 1.47446 8.25818 2.69573 7.73404C3.917 7.20989 5.06531 7.42595 6.08688 8.30619C6.17137 8.37821 6.22898 8.43422 6.34803 8.3622C8.299 7.19789 10.2538 6.03758 12.1932 4.88527C12.174 4.54118 12.1356 4.21309 12.1472 3.881C12.1932 2.28858 13.4068 0.896205 14.92 0.680147C14.9699 0.672145 15.016 0.656141 15.0659 0.640137C15.2964 0.640137 15.5268 0.640137 15.7572 0.640137C15.7918 0.65214 15.8302 0.668144 15.8647 0.676146C17.2665 0.888203 18.3956 2.0085 18.6337 3.42488C18.8834 4.90928 18.2151 6.35767 16.9554 7.06586C15.7034 7.76604 14.1711 7.54198 13.138 6.50971C13.0919 6.4657 13.0458 6.42168 12.9959 6.37367C11.0181 7.54999 9.04789 8.7183 7.07388 9.89061C7.26206 10.5628 7.25438 11.223 7.07772 11.8791C9.05941 13.0555 11.0296 14.2238 13.0305 15.4121C13.0766 15.3481 13.1073 15.2881 13.1534 15.244C13.9291 14.4958 14.8432 14.1838 15.8878 14.3358C17.3856 14.5519 18.5953 15.9002 18.676 17.4246C18.7682 19.1411 17.785 20.5935 16.2411 21.0136C16.0798 21.0576 15.9185 21.0896 15.7572 21.1296C15.5306 21.1256 15.3002 21.1256 15.0698 21.1256Z"
                  fill="#828282"
                />
              </svg>
            )}
          </div>
          <p
            className={cn(
              "ml-2 text-muted-foreground",
              showCount === false && "hidden"
            )}
          >
            {newsData?.sharesCount}
          </p>
        </Button>
      </SharePopupModal>
    </div>
  )
}
