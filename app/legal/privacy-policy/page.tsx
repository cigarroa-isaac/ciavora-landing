import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad — CIAVORA · Gestión de Taller",
  description:
    "Aviso de privacidad de la aplicación CIAVORA · Gestión de Taller (mx.com.ciavora.staff): datos que se recaban, permisos, derechos ARCO y eliminación de cuenta.",
  alternates: { canonical: "/legal/privacy-policy" },
};

const h2 = "font-display text-2xl font-medium text-ink";
const p = "mt-3 text-[15px] leading-relaxed text-ink/85";
const link =
  "text-primary underline underline-offset-2 hover:opacity-70 transition-opacity";
const strong = "font-medium text-ink";
const cell = "border border-line px-3 py-2.5 align-top text-[14px] text-ink/85 leading-relaxed";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <header className="border-b border-line">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <a href="/" className="font-display text-xl font-semibold text-ink">
            Ciavora
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <p className="eyebrow mb-4">Aviso de privacidad</p>
        <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.1] text-ink">
          Aviso de Privacidad
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-muted">
          Aplicación <span className={strong}>CIAVORA · Gestión de Taller</span> (identificador{" "}
          <code className="font-mono text-[0.85em] bg-ink/[0.06] px-1.5 py-0.5 rounded-[4px]">
            mx.com.ciavora.staff
          </code>
          )
          <br />
          Última actualización: 30 de septiembre de 2026
        </p>

        <div className="mt-14 space-y-12">
          <section>
            <h2 className={h2}>1. Identidad y domicilio del responsable</h2>
            <p className={p}>
              El responsable del tratamiento de los datos personales recabados a través de esta
              aplicación es <span className={strong}>CIAVORA</span> (Isaac Cigarroa Antonio), con
              domicilio en Tijuana, Baja California, México, y correo de contacto{" "}
              <a className={link} href="mailto:isaac@ciavora.com">
                isaac@ciavora.com
              </a>
              .
            </p>
            <p className={p}>
              CIAVORA es la plataforma tecnológica que provee la aplicación. Cada taller mecánico que
              utiliza el servicio es el titular y responsable de los datos operativos de su propio
              negocio (clientes, vehículos, órdenes de trabajo, facturación); CIAVORA los trata por
              cuenta de dicho taller, en calidad de encargado, conforme a las instrucciones del
              taller y al presente aviso.
            </p>
          </section>

          <section>
            <h2 className={h2}>2. A quién está dirigida la aplicación</h2>
            <p className={p}>
              Esta es una aplicación de uso laboral, dirigida al{" "}
              <span className={strong}>personal de los talleres</span> que contratan la plataforma
              CIAVORA. El acceso requiere iniciar sesión con las credenciales que el taller asigna a
              cada empleado. No está dirigida al público general ni a menores de edad.
            </p>
          </section>

          <section>
            <h2 className={h2}>3. Datos personales que recabamos y para qué</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-line bg-surface px-3 py-2.5 text-left text-[13px] font-medium text-ink">
                      Categoría de datos
                    </th>
                    <th className="border border-line bg-surface px-3 py-2.5 text-left text-[13px] font-medium text-ink">
                      Para qué se usan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={cell}>
                      <span className={strong}>Datos de cuenta e identificación</span>: nombre de
                      usuario, credenciales de acceso, taller al que perteneces, rol y datos
                      laborales asociados.
                    </td>
                    <td className={cell}>
                      Autenticarte, mostrarte solo la información de tu taller y controlar tus
                      permisos dentro de la app.
                    </td>
                  </tr>
                  <tr>
                    <td className={cell}>
                      <span className={strong}>Ubicación geográfica</span> (aproximada y precisa).
                    </td>
                    <td className={cell}>
                      Se utiliza{" "}
                      <span className={strong}>
                        únicamente en el momento en que registras tu entrada o salida de asistencia
                      </span>
                      , para verificar que te encuentras en el taller. No se realiza seguimiento de
                      ubicación en segundo plano ni de forma continua.
                    </td>
                  </tr>
                  <tr>
                    <td className={cell}>
                      <span className={strong}>Cámara y fotografías</span>.
                    </td>
                    <td className={cell}>
                      Tomar o adjuntar fotos de evidencia de los vehículos y de las órdenes de
                      trabajo, y escanear códigos de las órdenes. Solo se accede a la cámara/galería
                      cuando tú lo solicitas.
                    </td>
                  </tr>
                  <tr>
                    <td className={cell}>
                      <span className={strong}>Autenticación biométrica</span> (Face ID / huella
                      dactilar).
                    </td>
                    <td className={cell}>
                      Confirmar tu identidad al registrar asistencia y proteger el acceso. El dato
                      biométrico lo procesa y almacena el sistema operativo de tu dispositivo;{" "}
                      <span className={strong}>
                        CIAVORA no recibe, transmite ni almacena tu huella o rostro
                      </span>
                      : solo recibe la confirmación de que la verificación fue exitosa.
                    </td>
                  </tr>
                  <tr>
                    <td className={cell}>
                      <span className={strong}>Identificador de notificaciones (token push)</span>.
                    </td>
                    <td className={cell}>
                      Enviarte avisos operativos relacionados con tu trabajo (por ejemplo,
                      asignación de órdenes).
                    </td>
                  </tr>
                  <tr>
                    <td className={cell}>
                      <span className={strong}>Datos operativos del taller</span> que capturas o
                      consultas: clientes, vehículos, órdenes de trabajo, evidencias y datos de
                      facturación.
                    </td>
                    <td className={cell}>
                      Prestar el servicio de gestión del taller. Estos datos pertenecen al taller
                      responsable; CIAVORA los procesa por su cuenta.
                    </td>
                  </tr>
                  <tr>
                    <td className={cell}>
                      <span className={strong}>Datos técnicos y de diagnóstico</span>: modelo de
                      dispositivo, versión de la app y registros de errores.
                    </td>
                    <td className={cell}>
                      Mantener la seguridad, prevenir fraude y mejorar la estabilidad del servicio.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className={h2}>4. Permisos del dispositivo</h2>
            <p className={p}>
              La aplicación solicita los siguientes permisos, siempre para las finalidades descritas
              arriba y que puedes conceder o revocar desde la configuración de tu dispositivo:
            </p>
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink/85 list-disc pl-5 marker:text-primary">
              <li>
                <span className={strong}>Ubicación</span>: solo al registrar entrada/salida de
                asistencia.
              </li>
              <li>
                <span className={strong}>Cámara</span>: para fotos de evidencia y escaneo de órdenes.
              </li>
              <li>
                <span className={strong}>Fotos / almacenamiento</span>: para adjuntar imágenes
                existentes como evidencia.
              </li>
              <li>
                <span className={strong}>Biométrico</span>: para confirmar tu identidad de forma
                local.
              </li>
              <li>
                <span className={strong}>Notificaciones</span>: para avisos operativos.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>5. Transferencias y con quién se comparten los datos</h2>
            <p className={p}>
              <span className={strong}>No vendemos tus datos personales</span> ni los compartimos con
              terceros para fines publicitarios. Los datos pueden ser tratados por proveedores que
              nos permiten operar el servicio, actuando bajo contrato y solo conforme a nuestras
              instrucciones, por ejemplo:
            </p>
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink/85 list-disc pl-5 marker:text-primary">
              <li>
                Proveedor de infraestructura en la nube donde se aloja el servidor de la aplicación.
              </li>
              <li>
                Servicio de notificaciones push (para entregar los avisos a tu dispositivo).
              </li>
              <li>Servicios de facturación electrónica y pagos, cuando el taller los utiliza.</li>
            </ul>
            <p className={p}>
              También podremos divulgar información cuando lo exija una autoridad competente o la ley
              aplicable.
            </p>
          </section>

          <section>
            <h2 className={h2}>6. Seguridad de la información</h2>
            <p className={p}>
              Aplicamos medidas técnicas y organizativas para proteger tus datos, entre ellas:
              transmisión cifrada mediante HTTPS/TLS, almacenamiento de credenciales en el almacén
              seguro del sistema operativo, y desactivación del respaldo automático de los datos de
              la app hacia la nube del dispositivo para evitar su extracción. Ningún sistema es 100%
              infalible, pero trabajamos para reducir los riesgos de forma razonable.
            </p>
          </section>

          <section>
            <h2 className={h2}>7. Conservación de los datos</h2>
            <p className={p}>
              Conservamos los datos mientras exista la relación laboral con el taller y la relación
              de servicio entre el taller y CIAVORA, y por los plazos que exija la legislación fiscal
              y mercantil aplicable. Concluidos esos plazos, los datos se eliminan o se anonimizan.
            </p>
          </section>

          <section>
            <h2 className={h2}>8. Tus derechos (ARCO) y control de tus datos</h2>
            <p className={p}>
              Tienes derecho a{" "}
              <span className={strong}>Acceder, Rectificar, Cancelar u Oponerte</span> al tratamiento
              de tus datos personales, así como a revocar tu consentimiento. Como esta es una
              herramienta laboral, muchas solicitudes se atienden a través del taller que administra
              tu cuenta. Para ejercer tus derechos o resolver dudas, escribe a{" "}
              <a className={link} href="mailto:isaac@ciavora.com">
                isaac@ciavora.com
              </a>{" "}
              indicando tu solicitud y los datos que te identifican; te responderemos en los plazos
              que marca la ley.
            </p>
            <p className={p}>
              <span className={strong}>Eliminación de cuenta y datos:</span> puedes solicitar la
              eliminación de tu cuenta y de tus datos personales enviando un correo a{" "}
              <a className={link} href="mailto:isaac@ciavora.com">
                isaac@ciavora.com
              </a>
              . Atenderemos la solicitud salvo que la conservación sea requerida por obligaciones
              legales del taller (por ejemplo, fiscales).
            </p>
          </section>

          <section>
            <h2 className={h2}>9. Menores de edad</h2>
            <p className={p}>
              La aplicación no está dirigida a menores de edad y no recabamos conscientemente datos
              de menores.
            </p>
          </section>

          <section>
            <h2 className={h2}>10. Cambios a este aviso</h2>
            <p className={p}>
              Podemos actualizar este Aviso de Privacidad. Publicaremos la versión vigente en esta
              misma dirección e indicaremos la fecha de última actualización. El uso continuado de la
              aplicación tras un cambio implica la aceptación del aviso actualizado.
            </p>
          </section>

          <section>
            <h2 className={h2}>11. Contacto</h2>
            <p className={p}>
              Para cualquier asunto relacionado con este aviso o con tus datos personales:{" "}
              <a className={link} href="mailto:isaac@ciavora.com">
                isaac@ciavora.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-ink text-background border-t border-white/[0.08] mt-20">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <span className="font-display text-xl font-medium">Ciavora</span>
          <p className="font-mono text-[11px] text-background/40 mt-4">
            © 2026 CIAVORA — Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
