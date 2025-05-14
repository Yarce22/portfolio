"use client"
import Image from "next/image"
import React, { useEffect } from "react"
import { GET } from "src/app/api/certificates/route"
import { useStore } from "src/Store"
import { Button } from "../shared/Button"
import Link from "next/link"

const Certificates: React.FC = () => {
  const certificates = useStore((state) => state.certificates)
  const setCertificates = useStore((state) => state.setCertificates)

  useEffect(() => {
    const fetchCertificates = async () => {
      const response = await GET()
      const data = await response.json()
      const lastCertificates = data.certificatesCollection.items.slice(0, 6)
      setCertificates(lastCertificates)
    }
    fetchCertificates()
  }, [setCertificates])

    return (
        <section className="flex flex-col lg:flex-row items-center lg:justify-center pb-30 px-6 lg:pt-0">
            {
              certificates.length > 0 ? (
                <div className="flex flex-col justify-center items-center gap-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                      {certificates.map((certificate: Certificate, index: number) => (
                        <div key={index} className="grid place-items-center grid-rows-[100px_1fr]">
                          <h3 className="pb-4 text-Text text-xl text-center font-Geist-Mono font-bold">
                            {certificate.title}
                          </h3>
                          <a href={certificate.img.url}>
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
                    <Link href="/certificates">
                      <Button label="View all certificates"  />
                    </Link>
                </div>
              ) : (
                <p className="pb-4 text-Text text-xl text-center font-Geist-Mono font-bold">No certificates found</p>
              )
            }
        </section>
    )
}

export { Certificates }