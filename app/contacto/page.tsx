"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      })

      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-[#2D3E50]">Contacto</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-600">
          ¿Listo para crear tu obra de arte personalizada? Contáctanos y comencemos a trabajar juntos en tu proyecto.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[#D4AF37] mt-1 mr-3" />
                    <div>
                      <h3 className="font-playfair font-bold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">info@arteamedida.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-[#D4AF37] mt-1 mr-3" />
                    <div>
                      <h3 className="font-playfair font-bold text-lg mb-1">Teléfono</h3>
                      <p className="text-gray-600">+34 123 456 789</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#D4AF37] mt-1 mr-3" />
                    <div>
                      <h3 className="font-playfair font-bold text-lg mb-1">Dirección</h3>
                      <p className="text-gray-600">
                        Calle del Arte, 123
                        <br />
                        28001 Madrid, España
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-[#2D3E50] text-white p-6 rounded-lg">
                <h3 className="font-playfair font-bold text-xl mb-4">Horario de atención</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span>9:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado:</span>
                    <span>10:00 - 15:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Cerrado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold mb-6 text-[#2D3E50]">Cuéntanos sobre tu proyecto</h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                    <h3 className="font-bold text-lg mb-2">¡Mensaje enviado con éxito!</h3>
                    <p>Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre completo</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Tu número de teléfono"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectType">Tipo de proyecto</Label>
                        <Select value={formData.projectType} onValueChange={handleSelectChange}>
                          <SelectTrigger id="projectType">
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="retrato">Retrato personalizado</SelectItem>
                            <SelectItem value="paisaje">Paisaje</SelectItem>
                            <SelectItem value="abstracto">Arte abstracto</SelectItem>
                            <SelectItem value="decorativo">Arte decorativo</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntanos los detalles de tu proyecto..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#2D3E50] hover:bg-[#1e2a38] text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-12">
          <h2 className="font-playfair text-2xl font-bold mb-6 text-[#2D3E50]">Nuestra ubicación</h2>
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Mapa de ubicación</p>
            {/* Aquí se integraría un mapa real con Google Maps, Mapbox, etc. */}
          </div>
        </div>
      </div>
    </div>
  )
}

