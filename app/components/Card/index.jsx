"use client";
import React, { useState } from "react";
import { Card } from "flowbite-react";
import { motion } from "framer-motion";

function CardSection() {
  const [like, setLike] = useState(false);
  const [modal, setModal] = useState(false);
  const text =
    "Feliz cumpleaños 24 mi amor, se que este numero es importante para ti y espero que lo celebres al máximo y que disfrutes mucho de tu dia tan especial, esta vez queria regalarte algo especial, pense mucho en hacer una carta normal como siempre pero como hace mucho que no escribo me daba miedo hacer la letra fea jeje y como he estado haciendo y practicando mucho web pues se me ocurrio esta idea un tanto diferente, espero que te guste😁. Me hace muy feliz compartir la vida contigo, cada momento, cada comida, cada peli o serie que vemos juntos es una razon para estar agradecido con la vida por tu existencia. Te amo con todo mi 💙, amo lo trabajadora y responsable que eres con tu trabajo, el servicio y la escuela; se que seguramente es cansado pero ya mero llegas a la meta y me enorgullece mucho todo lo que has logrado los ultimos años, se que solo es el comienzo!!. Gracias por aguantar mis pelis de 3 horas o mostrar interes por las cosas que me gustan, se siente muy bonito cuando me preguntas por algo que me gusta aunque no lo conozcas tan bien, gracias por lo detallista, cariñosa,  linda  que eres siempre conmigo, de verdad que me gane la vida contigo. Preciosa, wapetona, ratoncia, oruguita, mi amor espero que disfrutes mucho tu cumple, este regalo y los demas (espero algun dia el regalo sea betty🐎), se que maybe no soy la  persona mas expresiva a veces, pero que sepas que de verdad  te amoooooo con todo mi cora ✨✨.".split(
      " "
    );

  const likePost = () => {
    setLike(!like);
  };

  const ocModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      {modal ? (
        <Card className="md:h-3/4 shadow-lg">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900  p-5">
                Para ti shula:
              </h1>
              <button onClick={ocModal} className="p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                  />
                </svg>
              </button>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400 p-5 md:text-lg sm:text-sm">
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </p>
            <button className=" place-self-end p-8" onClick={likePost}>
              {like ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="red"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" w-10  h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              )}
            </button>
          </div>
        </Card>
      ) : (
        <Card className="md:h-3/4 shadow-lg   ">
          <div className="flex items-center flex-col">
            <button
              className="bg-blue-200 h-32 w-20 flex items-center justify-center rounded-xl shadow-lg"
              onClick={ocModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </button>
            <p className="text-gray-500 text-2xl font-semibold mt-4 p-3">
              Abreme!!😁
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}

export default CardSection;
