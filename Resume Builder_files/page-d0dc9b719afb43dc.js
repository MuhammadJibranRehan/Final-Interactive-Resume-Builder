(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    8350: (e, l, r) => {
      Promise.resolve().then(r.bind(r, 8212));
    },
    8212: (e, l, r) => {
      "use strict";
      r.r(l), r.d(l, { default: () => t });
      var s = r(7437),
        a = r(2265);
      function t() {
        let [e, l] = (0, a.useState)(!1),
          [r, t] = (0, a.useState)({
            fullName: "",
            contactInfo: "",
            experience: "",
            skills: "",
            education: "",
            portfolioLink: "",
            languages: "",
            hobbies: "",
            profilePicture: "",
          }),
          [n, o] = (0, a.useState)(!1);
        return (0, s.jsxs)("div", {
          className: "".concat(
            e ? "bg-gray-900 text-white" : "bg-white text-gray-900",
            " min-h-screen p-6 flex flex-col items-center justify-center"
          ),
          children: [
            (0, s.jsxs)("button", {
              className: "p-3 mb-8 rounded-lg ".concat(
                e
                  ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                  : "bg-blue-500 text-white hover:bg-blue-600",
                " transition-colors duration-300 font-semibold"
              ),
              onClick: () => l(!e),
              children: ["Toggle ", e ? "Light" : "Dark", " Mode"],
            }),
            (0, s.jsxs)("div", {
              className: "container mx-auto max-w-lg p-0",
              children: [
                (0, s.jsx)("h1", {
                  className: "text-4xl font-extrabold mb-8 text-center",
                  children: "Resume Builder",
                }),
                n
                  ? (0, s.jsxs)("div", {
                      className: "".concat(
                        e ? "bg-gray-800" : "bg-gray-100",
                        " p-8 rounded-lg shadow-lg mt-8"
                      ),
                      children: [
                        (0, s.jsx)("h2", {
                          className: "text-3xl font-semibold mb-6 text-center",
                          children: "Resume Preview",
                        }),
                        (0, s.jsxs)("div", {
                          className: "space-y-4 text-center",
                          children: [
                            r.profilePicture &&
                              (0, s.jsx)("div", {
                                children: (0, s.jsx)("img", {
                                  src: r.profilePicture,
                                  alt: "Profile Picture",
                                  className: "w-32 h-32 rounded-full mx-auto",
                                }),
                              }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("u", {
                                  children: (0, s.jsx)("h3", {
                                    className: "text-xl font-bold",
                                    children: "Full Name",
                                  }),
                                }),
                                (0, s.jsx)("p", { children: r.fullName }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("u", {
                                  children: (0, s.jsx)("h3", {
                                    className: "text-xl font-bold",
                                    children: "Contact Info",
                                  }),
                                }),
                                (0, s.jsx)("p", { children: r.contactInfo }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("u", {
                                  children: (0, s.jsx)("h3", {
                                    className: "text-xl font-bold",
                                    children: "Experience",
                                  }),
                                }),
                                (0, s.jsx)("p", { children: r.experience }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("u", {
                                  children: (0, s.jsx)("h3", {
                                    className: "text-xl font-bold",
                                    children: "Skills",
                                  }),
                                }),
                                (0, s.jsx)("p", { children: r.skills }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("u", {
                                  children: (0, s.jsx)("h3", {
                                    className: "text-xl font-bold",
                                    children: "Education",
                                  }),
                                }),
                                (0, s.jsx)("p", { children: r.education }),
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)("u", {
                                      children: (0, s.jsx)("h3", {
                                        className: "text-xl font-bold",
                                        children: "Portfolio Link",
                                      }),
                                    }),
                                    (0, s.jsx)("p", {
                                      children: (0, s.jsx)("a", {
                                        href: r.portfolioLink,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "text-blue-500 hover:underline",
                                        children: r.portfolioLink,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsxs)("u", {
                                  children: [
                                    " ",
                                    (0, s.jsx)("h3", {
                                      className: "text-xl font-bold",
                                      children: "Languages",
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("p", { children: r.languages }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("u", {
                                  children: (0, s.jsx)("h3", {
                                    className: "text-xl font-bold",
                                    children: "Hobbies",
                                  }),
                                }),
                                (0, s.jsx)("p", { children: r.hobbies }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("button", {
                          className: "mt-6 p-3 rounded-lg ".concat(
                            e
                              ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                              : "bg-blue-500 text-white hover:bg-blue-600",
                            " transition-colors duration-300 font-semibold w-full"
                          ),
                          onClick: () => o(!1),
                          children: "Edit Resume",
                        }),
                      ],
                    })
                  : (0, s.jsx)("div", {
                      className: "".concat(
                        e ? "bg-gray-800" : "bg-gray-100",
                        " p-8 rounded-lg shadow-lg"
                      ),
                      children: (0, s.jsxs)("form", {
                        onSubmit: (e) => {
                          e.preventDefault(), o(!0);
                        },
                        className: "space-y-6",
                        children: [
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("u", {
                                children: (0, s.jsx)("label", {
                                  className: "block font-semibold mb-2",
                                  children: "Profile Picture",
                                }),
                              }),
                              (0, s.jsx)("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: (e) => {
                                  var l;
                                  let s =
                                    null === (l = e.target.files) ||
                                    void 0 === l
                                      ? void 0
                                      : l[0];
                                  if (s) {
                                    let e = new FileReader();
                                    (e.onloadend = () => {
                                      t({ ...r, profilePicture: e.result });
                                    }),
                                      e.readAsDataURL(s);
                                  }
                                },
                                className: "w-full",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("u", {
                                children: (0, s.jsx)("label", {
                                  className: "block font-semibold mb-2",
                                  children: "Full Name",
                                }),
                              }),
                              (0, s.jsx)("input", {
                                type: "text",
                                value: r.fullName,
                                onChange: (e) =>
                                  t({ ...r, fullName: e.target.value }),
                                className: "w-full p-3 rounded border ".concat(
                                  e
                                    ? "bg-gray-700 border-gray-600 text-white"
                                    : "border-gray-300"
                                ),
                                placeholder: "Enter your name",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("u", {
                                children: (0, s.jsx)("label", {
                                  className: "block font-semibold mb-2",
                                  children: "Contact Info",
                                }),
                              }),
                              (0, s.jsx)("input", {
                                type: "text",
                                value: r.contactInfo,
                                onChange: (e) =>
                                  t({ ...r, contactInfo: e.target.value }),
                                className: "w-full p-3 rounded border ".concat(
                                  e
                                    ? "bg-gray-700 border-gray-600 text-white"
                                    : "border-gray-300"
                                ),
                                placeholder: "Phone, Email, etc.",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("u", {
                                children: (0, s.jsx)("label", {
                                  className: "block font-semibold mb-2",
                                  children: "Experience",
                                }),
                              }),
                              (0, s.jsx)("textarea", {
                                value: r.experience,
                                onChange: (e) =>
                                  t({ ...r, experience: e.target.value }),
                                className: "w-full p-3 rounded border ".concat(
                                  e
                                    ? "bg-gray-700 border-gray-600 text-white"
                                    : "border-gray-300"
                                ),
                                placeholder: "Describe your experience",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("u", {
                                children: (0, s.jsx)("label", {
                                  className: "block font-semibold mb-2",
                                  children: "Skills",
                                }),
                              }),
                              (0, s.jsx)("input", {
                                type: "text",
                                value: r.skills,
                                onChange: (e) =>
                                  t({ ...r, skills: e.target.value }),
                                className: "w-full p-3 rounded border ".concat(
                                  e
                                    ? "bg-gray-700 border-gray-600 text-white"
                                    : "border-gray-300"
                                ),
                                placeholder: "Skills (comma-separated)",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("u", {
                                children: (0, s.jsx)("label", {
                                  className: "block font-semibold mb-2",
                                  children: "Education",
                                }),
                              }),
                              (0, s.jsx)("textarea", {
                                value: r.education,
                                onChange: (e) =>
                                  t({ ...r, education: e.target.value }),
                                className: "w-full p-3 rounded border ".concat(
                                  e
                                    ? "bg-gray-700 border-gray-600 text-white"
                                    : "border-gray-300"
                                ),
                                placeholder: "Your education background",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("u", {
                                children: (0, s.jsx)("label", {
                                  className: "block font-semibold mb-2",
                                  children: "Portfolio Link",
                                }),
                              }),
                              (0, s.jsx)("input", {
                                type: "url",
                                value: r.portfolioLink,
                                onChange: (e) =>
                                  t({ ...r, portfolioLink: e.target.value }),
                                className: "w-full p-3 rounded border ".concat(
                                  e
                                    ? "bg-gray-700 border-gray-600 text-white"
                                    : "border-gray-300"
                                ),
                                placeholder: "Portfolio website link",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("u", {
                                children: (0, s.jsx)("label", {
                                  className: "block font-semibold mb-2",
                                  children: "Languages",
                                }),
                              }),
                              (0, s.jsx)("input", {
                                type: "text",
                                value: r.languages,
                                onChange: (e) =>
                                  t({ ...r, languages: e.target.value }),
                                className: "w-full p-3 rounded border ".concat(
                                  e
                                    ? "bg-gray-700 border-gray-600 text-white"
                                    : "border-gray-300"
                                ),
                                placeholder: "Languages you know",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("u", {
                                children: (0, s.jsx)("label", {
                                  className: "block font-semibold mb-2",
                                  children: "Hobbies",
                                }),
                              }),
                              (0, s.jsx)("input", {
                                type: "text",
                                value: r.hobbies,
                                onChange: (e) =>
                                  t({ ...r, hobbies: e.target.value }),
                                className: "w-full p-3 rounded border ".concat(
                                  e
                                    ? "bg-gray-700 border-gray-600 text-white"
                                    : "border-gray-300"
                                ),
                                placeholder: "Hobbies or interests",
                              }),
                            ],
                          }),
                          (0, s.jsx)("button", {
                            type: "submit",
                            className:
                              "w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300",
                            children: "Save Resume",
                          }),
                        ],
                      }),
                    }),
              ],
            }),
          ],
        });
      }
    },
  },
  (e) => {
    var l = (l) => e((e.s = l));
    e.O(0, [130, 215, 744], () => l(8350)), (_N_E = e.O());
  },
]);
