"use client"

import { Button } from "@/components/ui/button"

type Props = {
  quantity: number
  setQuantity: (quantity: number) => void
}

export default function QuantityButton({ quantity, setQuantity }: Props) {
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }
  return (
    <div className="flex h-[46px] w-[159px] items-center justify-evenly rounded-[10px] border border-input bg-zinc-100">
      <Button onClick={decreaseQuantity} variant="ghost" size="icon">
        <svg
          width="38"
          height="39"
          viewBox="0 0 38 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Component 95">
            <rect
              id="Rectangle 141"
              x="25.2295"
              y="18.1797"
              width="2.14004"
              height="12.2748"
              rx="1.07002"
              transform="rotate(90 25.2295 18.1797)"
              fill="#828282"
            />
          </g>
        </svg>
      </Button>
      <Button className="cursor-default" variant="ghost" size="icon">
        {quantity}
      </Button>
      <Button onClick={increaseQuantity} variant="ghost" size="icon">
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Component 94">
            <path
              id="Union"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.3687 13.1125C18.7778 13.1125 18.2987 13.5916 18.2987 14.1826V18.1798H14.301C13.71 18.1798 13.231 18.6589 13.231 19.2499C13.231 19.8408 13.71 20.3199 14.301 20.3199H18.2987V24.3173C18.2987 24.9083 18.7778 25.3873 19.3687 25.3873C19.9597 25.3873 20.4387 24.9083 20.4387 24.3173V20.3199H24.4357C25.0267 20.3199 25.5057 19.8408 25.5057 19.2499C25.5057 18.6589 25.0267 18.1798 24.4357 18.1798H20.4387V14.1826C20.4387 13.5916 19.9597 13.1125 19.3687 13.1125Z"
              fill="#828282"
            />
          </g>
        </svg>
      </Button>
    </div>
  )
}
