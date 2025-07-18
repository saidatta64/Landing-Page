import { AtomIcon, Edit, Share2 } from "lucide-react";
export default function Features() {
  return (
    <section
      id="features"
      className="min-h-fit pt-20  relative flex items-center justify-center overflow-hidden"
    >
      {/*Features section*/}
      <div className="mx-auto max-w-screen-xl px-4 mt-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Create, customize, and share your forms in three simple steps
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <AtomIcon className="h-6 w-6 text-primary" />
            </div>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Describe Your Form
            </h3>

            <p className="mt-2 text-gray-600">
              Simply tell our AI what kind of form you need. Whether it's a
              survey, registration form, or feedback form, we'll understand your
              requirements.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <Edit className="h-6 w-6 text-primary" />
            </div>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Customize & Refine
            </h3>

            <p className="mt-2 text-gray-600">
              Fine-tune your form with our intuitive editor. Add, remove, or
              modify fields to match your exact needs.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <Share2 className="h-6 w-6 text-primary" />
            </div>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Share & Collect
            </h3>

            <p className="mt-2 text-gray-600">
              Get a unique link to share your form. Start collecting responses
              immediately and view real-time analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
