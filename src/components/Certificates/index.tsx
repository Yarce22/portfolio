"use client"
import Image from "next/image"
import { useEffect } from "react"
import { GET } from "src/app/api/certificates/route"
import { useStore } from "src/Store"

const Certificates: React.FC = () => {
  const certificates = useStore((state) => state.certificates)
  const setCertificates = useStore((state) => state.setCertificates)

  useEffect(() => {
    const fetchCertificates = async () => {
      const response = await GET()
      const data = await response.json()
      console.log("certificates", data.certificatesCollection.items)
      setCertificates(data.certificatesCollection.items)
    }
    fetchCertificates()
  }, [setCertificates])

    return (
        <section id="certificates" className="flex flex-col lg:flex-row lg:gap-10 items-center lg:justify-center py-30 px-6 lg:pt-0 bg-Background">
            <h2 className="mt-20 mb-10 text-Titles text-5xl text-center lg:text-left font-Geist-Mono font-bold">
                CERTIFICATES
            </h2>
            {
              certificates.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {certificates.map((certificate: Certificate, index: number) => (
                    <div key={index}>
                      <h3>{certificate.title}</h3>
                      <Image src={certificate.img.url} alt={certificate.title} width={100} height={100} />
                    </div>
                  ))}
                </div>
              ) : (
                <p>No certificates found</p>
              )
            }
        </section>
    )
}

export { Certificates }