export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">Contact Me</h1>
        <div className="bg-white dark:bg-[#1e2a47] rounded-xl p-8 shadow-md transition-colors">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Email: <a href="mailto:fiqihbadrian@gmail.com" className="text-blue-500 dark:text-blue-400 hover:underline">fiqihbadrian@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
