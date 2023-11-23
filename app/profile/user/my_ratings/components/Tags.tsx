export default function Tags() {
  return (
    <div className="flex items-center justify-start gap-3 py-6">
      <span className="pr-2 text-sm font-light text-muted-foreground">
        Tags:
      </span>
      <button className="rounded-lg bg-muted px-3 py-1 text-muted-foreground shadow-sm hover:bg-muted/80 hover:shadow-md">
        Organized
      </button>
      <button className="rounded-lg bg-muted px-3 py-1 text-muted-foreground shadow-sm hover:bg-muted/80 hover:shadow-md">
        Positive
      </button>
      <button className="rounded-lg bg-muted px-3 py-1 text-muted-foreground shadow-sm hover:bg-muted/80 hover:shadow-md">
        Fun
      </button>
    </div>
  )
}
