

export default function ErrorMessage({children}) {
  return (
    <p className="italic text-red-600 font-bold">
      {children}
    </p>
  );
}
