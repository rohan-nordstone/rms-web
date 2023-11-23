import ChangePasswordForm from "./components/ChangePasswordForm"

export default function page() {
  return (
    <div className="px-12 py-9">
      <h4 className="mb-8 text-2xl font-bold leading-[30.50px] text-black">
        Security
      </h4>
      <ChangePasswordForm />
    </div>
  )
}
