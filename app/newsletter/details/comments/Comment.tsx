"use client"

import Image from "next/image"
import { faker } from "@faker-js/faker"

import { convertTimestamp } from "@/lib/util_functions/convertTimestamp"

import useCommentLikeMutation from "../hooks/useCommentLikeMutation"
import useIsCommentLiked from "../hooks/useIsCommentLiked"
import { TComment } from "./Comments"

type Props = {
  comment: TComment
}

export default function Comment({ comment }: Props) {
  const { isCommentLiked, isLoading, isError, error } = useIsCommentLiked(
    comment.id
  )

  const { mutate, isPending } = useCommentLikeMutation(comment?.id)

  return (
    <div className="flex gap-5">
      <Image
        className="hidden h-12 w-12 rounded-md sm:block"
        src={`/comments/image_${+faker.finance.amount({
          min: 1,
          max: 2,
          dec: 0,
        })}.webp`}
        alt={`/comments/image_${+faker.finance.amount({
          min: 1,
          max: 2,
          dec: 0,
        })}.webp`}
        width={1080}
        height={1080}
      />
      <div className="flex-1">
        <div className="rounded-[10px] rounded-tl-none bg-zinc-100 p-5">
          <div className="flex items-center gap-3 pb-5 sm:pb-0">
            <Image
              className="h-12 w-12 rounded-md sm:hidden"
              src={`/comments/image_${+faker.finance.amount({
                min: 1,
                max: 2,
                dec: 0,
              })}.webp`}
              alt={`/comments/image_${+faker.finance.amount({
                min: 1,
                max: 2,
                dec: 0,
              })}.webp`}
              width={1080}
              height={1080}
            />
            <h4 className="pb-2 text-base font-bold">
              {comment.user.username || "Anonymous"}
            </h4>
          </div>
          <p className="text-base font-light">{comment.comment}</p>
        </div>
        <div className="my-3 flex gap-7">
          <p
            onClick={() => {
              mutate()
            }}
            className="cursor-pointer text-sm font-light"
          >
            {isCommentLiked ? "Liked" : "Like"}
          </p>
          <p className="cursor-pointer text-sm font-light">Reply</p>
          <p className="cursor-pointer text-sm font-light">Permalink</p>
          <p className="ml-auto cursor-pointer text-sm font-light text-muted-foreground">
            {convertTimestamp(new Date(comment.createdAt))}
          </p>
        </div>
      </div>
    </div>
  )
}
