"use client"
import Image from "next/image"
import React, { useEffect } from "react"
import { GET } from "src/app/api/certificates/route"
import { useStore } from "src/Store"

const Certificates: React.FC = () => {
  const certificates = useStore((state) => state.certificates)
  const setCertificates = useStore((state) => state.setCertificates)

  useEffect(() => {
    const fetchCertificates = async () => {
      const response = await GET()
      const data = await response.json()
      setCertificates(data.certificatesCollection.items)
    }
    fetchCertificates()
  }, [setCertificates])

  console.log(certificates)

  return (
      <section className="flex flex-col items-center lg:justify-center py-10 lg:py-32 px-6 lg:pt-0 bg-BackgroundHero">
        <h2 className="mt-40 mb-12 text-Titles text-5xl text-center font-Geist-Mono font-bold">CERTIFICATES</h2>
          {
            certificates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {certificates.map((certificate: Certificate, index: number) => (
                  <div key={index}>
                    <a href={certificate.img.url} className="grid place-items-center grid-rows-[100px_1fr]">
                      <h3 className="pb-4 text-Text text-xl text-center font-Geist-Mono font-bold">
                        {certificate.title}
                      </h3>
                      <Image
                        src={certificate.img.url}
                        alt={certificate.title}
                        layout="responsive"
                        width={1}
                        height={1}
                      />
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="pb-4 text-Text text-xl text-center font-Geist-Mono font-bold">No certificates found</p>
            )
          }
      </section>
  )
}

export default Certificates 