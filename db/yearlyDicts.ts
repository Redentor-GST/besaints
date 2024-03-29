import { Phrase, Saints } from '../utils/interfaces'

const odd: Phrase[] = [
    {
        text: 'Lo que nos hace santos y agradables a Dios es lo que nuestra vocación nos exige, y no lo que escoge nuestra propia voluntad.',
        author: 'San Francisco de Sales',
        date: '01-01',
    },
    {
        text: 'Nosotros demostramos la santidad, estando siempre alegres.',
        author: 'Santo Domingo Savio',
        date: '01-02',
    },
    {
        text: 'Dios es amor y alegría y Él nos la comunica. Solo Dios basta. Fuera de Él no hay felicidad posible.',
        author: 'Santa Teresa de los Andes',
        date: '01-03',
    },
    {
        text: 'Para hacer el bien se necesita valor, estar dispuesto a sufrir cualquier mortificación, no hacer sufrir nunca a nadie, ser siempre amable.',
        author: 'San Juan Bosco',
        date: '01-04',
    },
    {
        text: '¿Hay algo más grande que Dios? ¿Hay algo más grande que un alma divinizada? ¿No es ésta la mayor grandeza a que puede aspirar el hombre?',
        author: 'Santa Teresa de los Andes',
        date: '01-05',
    },
    {
        text: 'El que no tiene otra elección que renegar de Dios o afrontar el suplicio puede estar seguro de que ha sido precisamente Dios el que lo ha puesto en ese aprieto.',
        author: 'Santo Tomás Moro',
        date: '01-06',
    },
    {
        text: 'El amor de Dios se adquiere resolviéndonos a trabajar y a sufrir por Él.',
        author: 'Santa Teresa de Avila',
        date: '01-07',
    },
    {
        text: 'Una prueba de que amamos a Dios verdaderamente es que lo amamos de igual forma en todas las ocasiones.',
        author: 'San Francisco de Sales',
        date: '01-08',
    },
    {
        text: 'Este divino Corazón es pero dulzura, humildad y paciencia, por lo tanto, debemos esperar... Él sabe cuando actuar.',
        author: 'Santa Margarita Maria',
        date: '01-09',
    },
    {
        text: 'Para ejercer una influencia benéfica entre los niños, es indispensable participar de sus alegrías.',
        author: 'San Juan Bosco',
        date: '01-10',
    },
    {
        text: 'Dios es como los piojos, está en todas partes, pero prefiere a los pobres.',
        author: 'San José Gabriel del Rosario Brochero',
        date: '01-11',
    },
    {
        text: 'Cuando el amor de Dios obtiene la voluntad del alma produce en ella un insaciable deseo de trabajar por el Amado.',
        author: 'San Juan Crisóstomo',
        date: '01-12',
    },
    {
        text: 'Hay que poner la castidad bajo el amparo de la caridad.',
        author: 'San Alberto Hurtado',
        date: '01-13',
    },
    {
        text: 'Las personas de carácter saben callar.',
        author: 'Santo Domingo Savio',
        date: '01-14',
    },
    {
        text: 'Habéis de mostraros mansos en llevar con paciencia los desabrimientos, genialidades y molestias del prójimo, sin desazonarnos por las contrariedades que os ocasionen.',
        author: 'Santa Margarita Maria',
        date: '01-15',
    },
    {
        text: '¿Qué haría Cristo si estuviese en mi lugar?',
        author: 'San Alberto Hurtado',
        date: '01-16',
    },
    {
        text: 'Pasó el tiempo de las persecuciones, pero también nuestra paz tiene un martirio propio: no doblamos ya nuestro cuello bajo el hierro, pero con la espada del espíritu nosotros mismos matamos los deseos carnales de nuestra alma.',
        author: 'San Gregorio Magno',
        date: '01-17',
    },
    {
        text: 'La avaricia roba, hiere y chupa la sangre. ¡Maldito el avaro! Poseído por la codicia del dinero, esa plata miserable que encierra el genio del mal, el avaro husmea doquiera el olor de la ganancia, oprime al pobre y desangra al desgraciado.',
        author: 'San Antonio de Padua',
        date: '01-18',
    },
    {
        text: 'El pecado es preferir el gusto de un instante a la amistad con Dios.',
        author: 'San Alberto Hurtado',
        date: '01-19',
    },
    {
        text: 'Loado seas, Señor, que me has concedido vivir hasta la mañana de hoy.',
        author: 'San Wenceslao',
        date: '01-20',
    },
    {
        text: 'Yo me felicitaría si Dios me saca de este planeta sentado confesando y predicando el Evangelio.',
        author: 'San José Gabriel del Rosario Brochero',
        date: '01-21',
    },
    {
        text: 'Entre la prácticas de la religión, el Santísimo Sacrificio es lo que el Sol entre los astros; pues es verdaderamente el alma de la religión cristiana.',
        author: 'San Francisco de Sales',
        date: '01-22',
    },
    {
        text: 'Jesús mío, ahora he visto que todo lo del mundo es vanidad. Que solo una cosa es necesaria: amarte y servirte con fidelidad, parecerme o asemejarme en todo a Ti. En eso consistirá toda mi ambición.',
        author: 'Santa Teresa de los Andes',
        date: '01-23',
    },
    {
        text: '¿De qué sirve ganar el mundo, si al final pierdes el alma?',
        author: 'San Ignacio de Loyola',
        date: '01-24',
    },
    {
        text: 'Jesús, Dueño mío... Cuando mi cabeza se acerque a la tuya, hazme sentir el dolor de las espinas que te punzaron. Cuando mi pecho se recline sobre el tuyo, haz que yo sienta la lanzada que te traspasó.',
        author: 'Santa Gema Galgani',
        date: '01-25',
    },
    {
        text: 'Casa de Dios llaman también a la confesión por la reconciliación del pecador. En ella se reconcilia el hombre con Dios, como se reconcilia el hijo con el padre cuando éste le recibe en la casa paterna.',
        author: 'San Antonio de Padua',
        date: '01-26',
    },
    {
        text: 'Es propio de la Fé hacernos humildes en los sucesos felices e impasibles en los reveses.',
        author: 'Santa Clara',
        date: '01-27',
    },
    {
        text: 'Si en la casa de la confesión se hace oír la sinfonía del canto y de la compunción amarga, responde inmediatamente al unísono el coro de la divina misericordia para perdonar los pecados.',
        author: 'San Antonio de Padua',
        date: '01-28',
    },
    {
        text: 'La humildad, pues, nos perfecciona en lo que mira a Dios, y la mansedumbre en lo que toca al prójimo.',
        author: 'San Francisco de Sales',
        date: '01-29',
    },
    {
        text: 'El gran momento de la gracia para un joven es aquel en que repara existencialmente que los ojos de Cristo se fijan en él, que lo llaman, que Cristo lo necesita.',
        author: 'San Alberto Hurtado',
        date: '01-30',
    },
    {
        text: 'Hay que hacer todo por amor, no por la fuerza.',
        author: 'San Francisco de Sales',
        date: '01-31',
    },
    {
        text: 'Aún cuando las apariencias sean contrarias. Pasarán por ingenuos: es el precio de la caridad.',
        author: 'Santo Tomás Moro',
        date: '02-01',
    },
    {
        text: 'Santos, santos, hombres chiflados por su ideal. Para los cuales Cristo es una realidad viviente, su Evangelio un código siempre actual, su mensaje algo perfectamente aplicable a su vida y que tratan de vivirlo...',
        author: 'San Alberto Hurtado',
        date: '02-02',
    },
    {
        text: 'Si se ofrecen cada día oportunidades para ofender a mi Dios, me armo cada día para el combate con la recepción de la Eucaristía.',
        author: 'Santo Tomás Moro',
        date: '02-03',
    },
    {
        text: 'Cuando el hombre espiritual se siente agobiado por la tentación, por alguna terrible sugestión diabólica, levántese pronto para la lucha y eleve su mente a las cosas celestiales.',
        author: 'San Antonio de Padua',
        date: '02-04',
    },
    {
        text: 'No pienses que el agradar a Dios está tanto en obrar mucho como en obrarlo con buena voluntad, sin propiedad y respetos.',
        author: 'San Juan de la Cruz',
        date: '02-05',
    },
    {
        text: 'La gracia de Dios es como la lluvia, que a todos moja.',
        author: 'San José Gabriel del Rosario Brochero',
        date: '02-06',
    },
    {
        text: 'La muerte, para el cristiano, no es un gran susto sino la gran esperanza.',
        author: 'San Alberto Hurtado',
        date: '02-07',
    },
    {
        text: 'El amor puede hacer todas las cosas.',
        author: 'Santa Teresa de Lisieux',
        date: '02-08',
    },
    {
        text: 'Mucho nos ama el Creador pues nos hace tantos beneficios; por eso debemos alejarnos del pecado de la ingratitud y cuidar de alabar siempre a Dios.',
        author: 'San Francisco de Asís',
        date: '02-09',
    },
    {
        text: 'Felices los que son suficientemente inteligentes, como para no tomarse en serio, porque serán apreciados por quienes los rodean.',
        author: 'Santo Tomás Moro',
        date: '02-10',
    },
    {
        text: 'Comencemos por practicar la justicia, pues mientras no se ha cumplido la justicia no se puede pensar en caridad. Dar a cada uno lo suyo; y no sólo pensemos en dar dinero, sino antes que todo amor.',
        author: 'San Alberto Hurtado',
        date: '02-11',
    },
    {
        text: 'La soberbia no es grandeza, sino hinchazón; y lo que está hinchado parece grande, pero no está sano.',
        author: 'San Agustín',
        date: '02-12',
    },
    {
        text: '¡Oh pobreza bienaventurada que da riquezas eternas a quienes la aman y abrazan!',
        author: 'Santa Clara',
        date: '02-13',
    },
    {
        text: 'Procedamos más según el Evangelio, sin tanta complicación. El Evangelio es sustancioso, de una universalidad y flexibilidad tal, que se puede aplicar en todo momento en todas las situaciones y con todo acierto.',
        author: 'San Alberto Hurtado',
        date: '02-14',
    },
    {
        text: 'No hay cosa que purifique más el entendimiento de ignorancias, y la voluntad de afectos depravados que la oración.',
        author: 'San Francisco de Sales',
        date: '02-15',
    },
    {
        text: 'Alcanza la excelencia y compártela.',
        author: 'San Ignacio de Loyola',
        date: '02-16',
    },
    {
        text: 'Los corazones de los hombres aman un día y al otro son indiferentes. Solo Dios no cambia.',
        author: 'Santa Teresa de los Andes',
        date: '02-17',
    },
    {
        text: 'Conócete. Acéptate. Supérate',
        author: 'San Agustín',
        date: '02-18',
    },
    {
        text: 'Los santos son como multitud de pequeños espejos en los que Jesucristo se contempla.',
        author: 'San Juan María Vianney (Cura de Ars)',
        date: '02-19',
    },
    {
        text: 'Debemos hacer todas nuestras acciones por la obligación que tenemos de ellas o por una simple aceptación del beneplácito de Dios, y esto tanto en la calma como en la tempestad.',
        author: 'San Francisco de Sales',
        date: '02-20',
    },
    {
        text: '...que se trabaje por crear un clima de verdadero amor y respeto al pobre, porque el pobre es Cristo.',
        author: 'San Alberto Hurtado',
        date: '02-21',
    },
    {
        text: 'La esperanza es la aceptación de los bienes futuros.',
        author: 'San Antonio de Padua',
        date: '02-22',
    },
    {
        text: 'La complacencia es el despertar del corazón; el amor es la acción.',
        author: 'San Francisco de Sales',
        date: '02-23',
    },
    {
        text: 'Siempre se debe preferir el bien general al particular. Nuestro beneficio particular no debe tomarse en cuenta cuando se trata del bien común.',
        author: 'San Juan Bosco',
        date: '02-24',
    },
    {
        text: 'Felices los que saben escuchar y callar, porque aprenderán cosas nuevas.',
        author: 'Santo Tomás Moro',
        date: '02-25',
    },
    {
        text: 'No puedo decirles más sino que el anonadamiento de ustedes mismos los elevará a la unión del Soberano Bien. Olvidándose, lo poseerán, y abandonándose a Él, Él los poseerá.',
        author: 'Santa Margarita Maria',
        date: '02-26',
    },
    {
        text: 'Sabed que la virtud de la paciencia es la que nos asegura la mayor perfección.',
        author: 'San Francisco de Sales',
        date: '02-27',
    },
    {
        text: 'El amor es un movimiento, una efusión y un avance del corazón hacia lo bueno.',
        author: 'San Francisco de Sales',
        date: '02-28',
    },
    {
        text: 'Dios siempre enriquece el alma adonde llega.',
        author: 'Santa Teresa de Jesús',
        date: '03-01',
    },
    {
        text: 'La oración, unida con ese divino sacrificio de la Misa, tiene una fuerza indecible; de modo que por este medio abunda el alma de celestiales favores como apoyada sobre su Amado.',
        author: 'San Francisco de Sales',
        date: '03-02',
    },
    {
        text: 'A pesar de toda oposición, este Divino Corazón eventualmente triunfará. Dichosos los que han sido instrumentos para establecer su Reinado.',
        author: 'Santa Margarita Maria',
        date: '03-03',
    },
    {
        text: 'Sólo amor es el que da valor a todas las cosas.',
        author: 'Santa Teresa de Avila',
        date: '03-04',
    },
    {
        text: 'Sólo en caso de necesidad y después de habernos corregido a nosotros mismos, se puede reprender a los demás.',
        author: 'San Antonio de Padua',
        date: '03-05',
    },
    {
        text: 'Cuando comulgaba, ni más ni menos que si viera con los ojos corporales entrar en su posada el Señor, procuraba esforzar la fe.',
        author: 'Santa Teresa de Jesús',
        date: '03-06',
    },
    {
        text: 'Comprenderás mejor la importancia del bien, si consideras que tu salvación eterna o tu condenación, depende únicamente de ti.',
        author: 'San Juan Bosco',
        date: '03-07',
    },
    {
        text: 'Estamos en las manos de Dios... Esa es la gran ciencia, estar a fondo en las manos de Dios... Ahora estoy enteramente en sus manos y por eso estoy feliz.',
        author: 'San Alberto Hurtado',
        date: '03-08',
    },
    {
        text: 'Jesús convida con un modo suavísimo, con palabras dulcísimas a seguirle y ponerse bajo su bandera. En la cruz está nuestra salud y nuestra vida, la fortaleza del corazón, el gozo del espíritu y la esperanza del cielo.',
        author: 'San José Gabriel del Rosario Brochero',
        date: '03-09',
    },
    {
        text: 'Lo que se necesita para conseguir la felicidad, no es una vida cómoda, sino un corazón enamorado.',
        author: 'San Josemaría Escrivá de Balaguer',
        date: '03-10',
    },
    {
        text: 'Los santos no nacieron santos; llegaron a la santidad después de una larga continuidad de vencimientos propio.',
        author: 'Santa Micaela del Santísimo Sacramento',
        date: '03-11',
    },
    {
        text: 'La habitual contemplación de Cristo paciente y despreciado, y el recuerdo de sus sacrificios, hacen insensibles los placeres y gozos de la tierra.',
        author: 'San Antonio de Padua',
        date: '03-12',
    },
    {
        text: '¡Oh démonos a Él! ¿Qué son cincuenta años y aún cien de vida, comparados con la eternidad?',
        author: 'Santa Teresa de los Andes',
        date: '03-13',
    },
    {
        text: 'Con pequeñas mortificaciones se vencen las pequeñas insidias del demonio.',
        author: 'San Juan Bosco',
        date: '03-14',
    },
    {
        text: 'Cada sacerdote está llamado a tener su pequeña grey de feligreses, de alumnos, de almas a las cuales dirige espiritualmente.',
        author: 'San Alberto Hurtado',
        date: '03-15',
    },
    {
        text: 'Prefieran más ser amados que temidos. El amor dulcifica lo amargo y aligera el peso insoportable. El temor, al contrario, nos hace intolerables hasta las cosas más insignificantes.',
        author: 'San Antonio de Padua',
        date: '03-16',
    },
    {
        text: 'Muchos aspiran al tiempo tranquilo, para pensar, leer, para preparar cosas grandes. Pero hay tareas que todos rechazan; que éstas sean de preferencia las mías. Nuestras acciones valen en función del peso del amor que ponemos en ellas.',
        author: 'San Alberto Hurtado',
        date: '03-17',
    },
    {
        text: 'Solo en el total desasimiento de ustedes mismos y de todo lo que no es Dios hallarán la verdadera paz y dicha perfecta, porque no teniendo nada, lo hallarán todo en el sagrado Corazón de Jesús.',
        author: 'Santa Margarita Maria',
        date: '03-18',
    },
    {
        text: 'El corazón lleno de amor ama los mandamientos, y cuanto más difíciles son, los encuentra más dulces y agradables, porque complacen más el Amado y le dan más honor.',
        author: 'San Francisco de Sales',
        date: '03-19',
    },
    {
        text: 'El sacerdote que no tiene mucha lástima de los pecadores es medio sacerdote. Estos trapos benditos que llevo encima no son los que me hacen sacerdote; si no llevo en mi pecho la caridad, ni a cristiano llego.',
        author: 'San José Gabriel del Rosario Brochero',
        date: '03-20',
    },
    {
        text: 'Puedo ver, tan claro como el día, que una vida que no tiene el amor de Jesucristo vive la más grande miseria.',
        author: 'Santa Margarita Maria',
        date: '03-21',
    },
    {
        text: 'Cuando uno ama, todo habla de amor, hasta nuestros trabajos que requieren nuestra total atención pueden ser un testimonio de nuestro amor.',
        author: 'Santa Margarita Maria',
        date: '03-22',
    },
    {
        text: 'Dios en cada momento me sostiene. Todo cuanto veo me habla de su poderío infinito y de su amor. Uniéndome a su Ser divino me santifico, me perfecciono, me divinizo.',
        author: 'Santa Teresa de los Andes',
        date: '03-23',
    },
    {
        text: 'La ley de Cristo, que se cumple en el amor, nos obliga a procurar la salvación de las almas más que la del cuerpo.',
        author: 'San Francisco de Asís',
        date: '03-24',
    },
    {
        text: 'Nada es más precioso que la paz, que desarma a cada hostil terrestre y espiritual.',
        author: 'San Ignacio de Antioquía',
        date: '03-25',
    },
    {
        text: 'Una buena forma de ejercitarnos en el amor a Cristo es manteniéndolo presente en nuestras mentes siempre que sea posible.',
        author: 'San Vicente de Paul',
        date: '03-26',
    },
    {
        text: 'El cielo es firme y no está sujeto a generación, y las almas que son de naturaleza celestial son firmes, no están sujetas a engendrar apetitos ni otra cualquier cosa, por que se parecen a Dios en su manera, que no se mueve para siempre.',
        author: 'San Juan de la Cruz',
        date: '03-27',
    },
    {
        text: 'Con la práctica fiel de las virtudes más humildes y sencillas, has hecho Madre mía, visible a todos el camino recto del Cielo.',
        author: 'Santa Teresa de Lisieux',
        date: '03-28',
    },
    {
        text: 'Recuerda que la perfección consiste en conformar la vida y las acciones totalmente a las virtudes sagradas del Corazón de Jesús, especialmente su paciencia, su mansedumbre, su humildad y su caridad. Como resultado, nuestra vida interior y exterior llega a ser una imagen viva de Él.',
        author: 'Santa Margarita Maria',
        date: '03-29',
    },
    {
        text: 'Olvídense de ustedes mismos y entréguense a Él, y Él tendrá cuenta y cuidado de ustedes.',
        author: 'Santa Margarita Maria',
        date: '03-30',
    },
    {
        text: 'Podemos sufrir que nos hagan ventaja en otras cosas, pero no en la obediencia.',
        author: 'San Ignacio de Loyola',
        date: '03-31',
    },
    {
        text: 'Abrácense humildemente con las cosas que más los humillen y anonaden, como medios muy al caso para hacer que triunfe el dulce y amable Corazón de Jesús, y reine su corazón en el suyo.',
        author: 'Santa Margarita Maria',
        date: '04-01',
    },
    {
        text: 'Alegría, estudio y piedad: es el mejor programa para hacerte feliz y que más beneficiará tu alma.',
        author: 'San Juan Bosco',
        date: '04-02',
    },
    {
        text: 'Oh Señor, que yo no busque tanto ser consolado, cuanto consolar, ser comprendido, cuanto comprender, ser amado, cuanto amar.',
        author: 'San Francisco de Asís',
        date: '04-03',
    },
    {
        text: 'Dios me da la ocupación de buscar mi fin y de orar por los hombres pasados, por los presentes y por los que han de venir hasta el fin del mundo.',
        author: 'San José Gabriel del Rosario Brochero',
        date: '04-04',
    },
    {
        text: 'Es mejor ser cristiano sin decirlo que proclamarlo sin serlo.',
        author: 'San Ignacio de Antioquía',
        date: '04-05',
    },
    {
        text: 'No entones las alabanzas divinas solo con la voz, acompaña también la voz con las obras. Si cantas solo con la voz, por fuerza tendrás al fin que callar; canta con la vida para no callar jamás.',
        author: 'San Agustín',
        date: '04-06',
    },
    {
        text: 'El mérito consiste sólo en la virtud de la caridad, sazonado con la luz de la verdadera discreción.',
        author: 'Santa Catalina de Siena',
        date: '04-07',
    },
    {
        text: 'El tesoro más grande que se puede hallar en el cielo y en la tierra, está en el Sagrario, pues ahí habita el Dueño de todo lo creado.',
        author: 'San Juan Bosco',
        date: '04-08',
    },
    {
        text: 'Él todo lo repara, modifica y vivifica; ama en el corazón, escucha en la cabeza, ve en los ojos, habla en la lengua; hace todo en todo y entonces no vivimos nosotros, sino que el mismo Jesucristo quien vive en nosotros.',
        author: 'San Francisco de Sales',
        date: '04-09',
    },
    {
        text: 'Pido a Jesús que me atraiga a las llamas de su amor, que me una tan estrechamente a sí, que sea Él quien viva y obre en mí.',
        author: 'Santa Teresa de Lisieux',
        date: '04-10',
    },
    {
        text: 'El nombre de Jesús es superior a todo nombre, porque delante de él se dobla toda rodilla. Si lo predicas, ablanda las voluntades más obstinadas. Si lo invocas, dulcifica las más ásperas tentaciones. Si piensas en Él, se te ilumina la inteligencia. Si lo lees, te alimenta el corazón.',
        author: 'San Antonio de Padua',
        date: '04-11',
    },
    {
        text: 'Cuando no puedo asistir a la Santa Misa, adoro el Cuerpo de Cristo con los ojos del espíritu en la oración, lo mismo que le adoro cuando le veo en la Misa.',
        author: 'San Francisco de Asís',
        date: '04-12',
    },
    {
        text: 'La prueba del amor está en las obras. Donde el amor existe se obran grandes cosas y cuando deja de obrar deja de existir.',
        author: 'San Gregorio Magno',
        date: '04-13',
    },
    {
        text: 'Ya no necesito más: conozco a Cristo pobre y crucificado.',
        author: 'San Francisco de Asís',
        date: '04-14',
    },
    {
        text: 'Señor, tú alegras mi mente de alegría espiritual. Cómo es glorioso tu cáliz que supera todos los placeres probados anteriormente.',
        author: 'San Agustín',
        date: '04-15',
    },
    {
        text: 'Su amor me previno desde la infancia, creció conmigo, y ahora es un abismo cuya profundidad me es imposible medir.',
        author: 'Santa Teresa de Lisieux',
        date: '04-16',
    },
    {
        text: 'Harta misericordia nos hace a todos que quiere Su Majestad entendamos que es Él el que está en el Santísimo Sacramento.',
        author: 'Santa Teresa de Jesús',
        date: '04-17',
    },
    {
        text: 'La naturaleza nos engendra pobres: desnudos nacemos y desnudos morimos. La malicia humana ha creado a los ricos y el que quiere serlo cae en la red tendida por el diablo.',
        author: 'San Antonio de Padua',
        date: '04-18',
    },
    {
        text: 'Dios salvará nuestras almas.',
        author: 'San Bonifacio',
        date: '04-19',
    },
    {
        text: '¿Qué hay que dudar que hará (el buen Jesús) milagros estando tan dentro de mí, si tenemos Fé viva, y nos dará lo que le pidiéremos, pues está en nuestra casa?',
        author: 'Santa Teresa de Jesús',
        date: '04-20',
    },
    {
        text: 'Ten cautela, hermana mía muy amada, en no dejarte abatir por la adversidad ni envanecer por la prosperidad.',
        author: 'Santa Clara',
        date: '04-21',
    },
    {
        text: 'Dios no ha de forzar nuestra voluntad; toma lo que le damos; mas no se da a sí del todo hasta que nos damos del todo.',
        author: 'Santa Teresa de Avila',
        date: '04-22',
    },
    {
        text: 'Trabajemos como si nunca tuviéramos que morir, y vivamos como si tuviésemos que desaparecer a cada instante.',
        author: 'San Juan Bosco',
        date: '04-23',
    },
    {
        text: 'Nada te turbe, nada te espante, todo se pasa, Dios no se muda, la paciencia, todo lo alcanza; quien a Dios tiene nada le falta: solo Dios basta.',
        author: 'Santa Teresa de Avila',
        date: '04-24',
    },
    {
        text: 'Señor, si tan maravillosas son las pálidas imágenes tuyas, ¡que insondable y admirable será tu misma grandiosidad!.',
        author: 'San Ignacio de Loyola',
        date: '04-25',
    },
    {
        text: 'Mis amados: que Dios amó al hombre desde la eternidad es una verdad tan clara y tan demostrada que el solo pensar lo contrario es y sería el colmo de la locura... El amor eterno de Dios hacia el hombre está escrito en todas las maravillas de la creación.',
        author: 'San José Gabriel del Rosario Brochero',
        date: '04-26',
    },
    {
        text: 'Lo que nos hace santos y agradables a Dios es lo que nuestra vocación nos exige, y no lo que escoge nuestra propia voluntad.',
        author: 'San Francisco de Sales',
        date: '04-27',
    },
    {
        text: 'Mire yo a mi Amado y mi Amado a mí; mire Él por mis cosas y yo por las suyas.',
        author: 'Santa Teresa de Avila',
        date: '04-28',
    },
    {
        text: '¿Saben cuál es el poder más bello y más laudable? Es aquel que domina a sí mismo su propia soberbia.',
        author: 'San Antonio de Padua',
        date: '04-29',
    },
    {
        text: 'Yo sostengo que cada pobre, cada vago, cada mendigo es Cristo en persona, que carga su cruz. Y como a Cristo debemos amarlo y ampararlo. Debemos tratarlo como a hermano, como a ser humano, como somos nosotros!',
        author: 'San Alberto Hurtado',
        date: '04-30',
    },
    {
        text: 'Ninguna otra cosa hemos de hacer sino ser solícitos en seguir la voluntad de Dios y en agradarle en todas las cosas.',
        author: 'San Francisco de Asís',
        date: '05-01',
    },
    {
        text: 'He visto que la felicidad en el mundo no existe. Siempre su trato me deja un vacío que lo llena por completo Nuestro Señor.',
        author: 'Santa Teresa de los Andes',
        date: '05-02',
    },
    {
        text: 'Solo el corazón humilde puede entrar en el Sagrado Corazón de Jesús, conversar con Él, amarle y ser amado de Él.',
        author: 'Santa Margarita Maria',
        date: '05-03',
    },
    {
        text: 'No hay que menester alas para ir a buscar a Dios, sino ponerse en soledad y mirarle dentro de sí.',
        author: 'Santa Teresa de Avila',
        date: '05-04',
    },
    {
        text: 'Reza como si todo dependiera de Dios. Trabaja como si todo dependiera de ti.',
        author: 'San Ignacio de Loyola',
        date: '05-05',
    },
    {
        text: 'El alma que está enamorada de Dios es una alma gentil, humilde y paciente.',
        author: 'San Juan de la Cruz',
        date: '05-06',
    },
    {
        text: 'Felices los que saben apreciar una sonrisa y olvidar un desprecio, porque su camino será pleno de sol.',
        author: 'Santo Tomás Moro',
        date: '05-07',
    },
    {
        text: 'Yo le he dicho al Señor Obispo y le he repetido hasta el fastidio quizás, que lo acompañaré hasta la muerte como simple soldado que desea morir en las peleas de Jesucristo.',
        author: 'San José Gabriel del Rosario Brochero',
        date: '05-08',
    },
    {
        text: 'El sacerdote para hacer mucho bien necesita unir a la caridad una fuerte dosis de amabilidad.',
        author: 'San Juan Bosco',
        date: '05-09',
    },
    {
        text: 'Para poder sufrir más, Cristo no abrió enseguida su costado. Lo abrió después de morir, para revelar el amor de su corazón, para enseñarnos que el amor no se hace espiritualmente presente antes de la muerte del hombre viejo que vive en nosotros según la carne.',
        author: 'San Francisco de Borja',
        date: '05-10',
    },
    {
        text: '¡Oh bondad de Dios! ¡Oh dignidad del penitente! Aquel que habita en la eternidad habita en el corazón del humilde y en el espíritu del penitente!',
        author: 'San Antonio de Padua',
        date: '05-11',
    },
    {
        text: 'Preferir la gloria de Dios a todas las cosas.',
        author: 'San Alberto Hurtado',
        date: '05-12',
    },
    {
        text: 'María es como la estrella de la mañana en medio de la oscuridad de las nubes, y el curso de su vida brilló como resplandece la luna en la plenitud de su luz. Como el sol, envía también ella fúlgidos resplandores.',
        author: 'San Antonio de Padua',
        date: '05-13',
    },
    {
        text: 'Solo cuenta el amor y la obediencia.',
        author: 'Santa Teresa de Lisieux',
        date: '05-14',
    },
    {
        text: 'Ocupémonos del prójimo, de servirle, aunque nos cueste repugnancia. De esta manera conseguiremos que el trono de nuestro corazón sea ocupado por su Dueño, por Dios.',
        author: 'Santa Teresa de los Andes',
        date: '05-15',
    },
    {
        text: 'Quizás no sabemos qué es amar, y no me espantaré mucho; porque no está en el mayor gusto, sino en la mayor determinación de desear en todo a Dios y procurar en cuanto pudiéremos, no ofenderle.',
        author: 'Santa Teresa de Avila',
        date: '05-16',
    },
    {
        text: 'Felices los que saben distinguir una montaña de una piedrita, porque evitarán muchos inconvenientes.',
        author: 'Santo Tomás Moro',
        date: '05-17',
    },
    {
        text: 'Dichoso quien no tiene más gozo y alegría que las palabras y obras del Señor.',
        author: 'San Francisco de Asís',
        date: '05-18',
    },
    {
        text: 'Besen de corazón frecuentemente las cruces que Nuestro Señor mismo pone sobre sus hombros; no miren si son de madera preciosa o perfumada; ellas son más cruz cuanto sean de una madera más vil, abyecta y maloliente.',
        author: 'San Francisco de Sales',
        date: '05-19',
    },
    {
        text: 'Tú que eres fervoroso en el espíritu, estás inflamado por el fuego del amor. Haz que tu vida se queme en la oración a Dios. Una persona está caliente, la otra está fría. Haz que la caliente dé calor a la fría.',
        author: 'San Agustín',
        date: '05-20',
    },
    {
        text: 'Felices ustedes si saben callar y ojalá sonreír cuando se les quita la palabra, se los contradice o cuando les pisan los pies, porque el Evangelio comienza a penetrar en su corazón.',
        author: 'Santo Tomás Moro',
        date: '05-21',
    },
    {
        text: 'Quería amar y no conocía lo que había de amar. ¡He encontrado al que buscaba mi alma!',
        author: 'San Francisco de Sales',
        date: '05-22',
    },
    {
        text: 'Siempre he visto en mi Dios harto mayores y más crecidas muestras de amor de lo que yo he sabido pedir ni desear.',
        author: 'Santa Teresa de Avila',
        date: '05-23',
    },
    {
        text: 'Vacíense de todo, y Él los henchirá.',
        author: 'Santa Margarita Maria',
        date: '05-24',
    },
    {
        text: 'Olvida los favores hechos, pero no los recibidos.',
        author: 'San Juan Bosco',
        date: '05-25',
    },
    {
        text: 'David tiró por tierra a Goliat con la honda y una piedra; así Cristo con la honda de la humanidad y la piedra de la Pasión venció al diablo.',
        author: 'San Antonio de Padua',
        date: '05-26',
    },
    {
        text: 'La afición a nuestro menosprecio en el Corazón de Jesús, nos basta para honrar los misterios de su santa muerte y pasión; y Cristo desea que le honremos guardando este sagrado silencio, como Él, en todas las ocasiones de humillación y trabajo; porque les confieso que no hay cosa que tanto me contente, como la taciturnidad que guardó tan exactamente en el discurso de la pasión. A imitación suya, no abramos la boca sino para orar por los que nos afligen y maltratan.',
        author: 'Santa Margarita Maria',
        date: '05-27',
    },
    {
        text: 'Acepta lo que te manda el Sagrado Corazón de Jesucristo para unirte a sí.',
        author: 'Santa Margarita Maria',
        date: '05-28',
    },
    {
        text: 'Haz el bien sin esperar agradecimiento de nadie, sino de Dios únicamente.',
        author: 'San Juan Bosco',
        date: '05-29',
    },
    {
        text: 'El examen de conciencia es siempre el mejor medio para cuidar bien el alma.',
        author: 'San Ignacio de Loyola',
        date: '05-30',
    },
    {
        text: 'Felices los que saben mirar con seriedad las pequeñas cosas y tranquilidad las cosas grandes, porque irán lejos en la vida.',
        author: 'Santo Tomás Moro',
        date: '05-31',
    },
    {
        text: 'Donde me llevan soy feliz... Vivir siempre muy alegres. Dios es alegría infinita.',
        author: 'Santa Teresa de los Andes',
        date: '06-01',
    },
    {
        text: 'Santifícate a ti mismo y santificarás a la sociedad.',
        author: 'San Francisco de Asís',
        date: '06-02',
    },
    {
        text: '¡Ay de los que tienen la despensa y los graneros repletos y el ropero bien provisto, mientras los pobres de Cristo, hambrientos y desnudos, gritan desconsolados ante sus puertas, no obteniendo más que algunas migajas de lo sobrante!',
        author: 'San Antonio de Padua',
        date: '06-03',
    },
    {
        text: 'Ya que los ojos del cuerpo no se pueden deleitar en mirarle, por estar tan encubierto (en el Santísimo Sacramento), se descubra a los del alma y se le de a conocer.',
        author: 'Santa Teresa de Jesús',
        date: '06-04',
    },
    {
        text: '¿Quieren saber mi deseo? Comulguen diariamente. Cuando no puedan comulgar sacramentalmente, comulguen al menos espiritualmente.',
        author: 'San Juan Bosco',
        date: '06-05',
    },
    {
        text: 'Si vencidos por el cansancio apenas tenemos ya fuerza para continuar, o si tanta es la pereza y blandenguería que estamos a punto de pararnos, pidamos a Dios que, por favor, nos arrastre aunque opongamos resistencia.',
        author: 'Santo Tomás Moro',
        date: '06-06',
    },
    {
        text: 'Felices los que saben reírse de sí mismos, porque nunca terminarán de divertirse.',
        author: 'Santo Tomás Moro',
        date: '06-07',
    },
    {
        text: 'Si cooperas a salvar un alma, aseguras la tuya propia.',
        author: 'San Juan Bosco',
        date: '06-08',
    },
    {
        text: '¿Quien no temerá habiendo gastado parte de la vida en no amar a su Dios?',
        author: 'Santa Teresa de Avila',
        date: '06-09',
    },
    {
        text: 'Nada puede pasarme que Dios no quiera. Y todo lo que El quiere, por muy malo que nos parezca, es en realidad lo mejor.',
        author: 'Santo Tomás Moro',
        date: '06-10',
    },
    {
        text: '¡Que cosa más rica es para el alma que ama pasar la vida junto al Sagrario! Después que comulgo me siento en el cielo, y dominada por el amor infinito de Dios.',
        author: 'Santa Teresa de los Andes',
        date: '06-11',
    },
    {
        text: '¿Cómo es posible que alguien que cree en Dios pueda amar algo fuera de Él?',
        author: 'San Felipe Neri',
        date: '06-12',
    },
    {
        text: 'O amar o morir; o morir o amar.',
        author: 'San Francisco de Sales',
        date: '06-13',
    },
    {
        text: 'Muéstrate siempre alegre, pero que tu sonrisa sea sincera.',
        author: 'San Juan Bosco',
        date: '06-14',
    },
    {
        text: 'El amor no consiste en grandes cosas, sino en tener grande desnudez y padecer por el Amado.',
        author: 'San Juan de la Cruz',
        date: '06-15',
    },
    {
        text: 'La mejor obra que se puede hacer en este mundo es atraer las almas perdidas al buen sendero, a la virtud.',
        author: 'San Juan Bosco',
        date: '06-16',
    },
    {
        text: 'Cuanto más tentado te veas, sábete que eres más amado. Nadie debe reputarse siervo de Dios hasta tanto que pase por las tentaciones y arideces.',
        author: 'San Francisco de Asís',
        date: '06-17',
    },
    {
        text: 'Pues (el Señor) todo lo sufre y sufrirá por hallar sola un alma que le reciba y tenga en sí con amor, sea ésta la suya.',
        author: 'Santa Teresa de Jesús',
        date: '06-18',
    },
    {
        text: 'Hagamos nosotros todo lo que esté a nuestro alcance y el Padre de la Divina Misericordia suplirá lo que falte.',
        author: 'San Juan Bosco',
        date: '06-19',
    },
    {
        text: 'En sobreviniendo la humillación, regocíjense, porque entrarán muy adentro en el Corazón de Jesús.',
        author: 'Santa Margarita Maria',
        date: '06-20',
    },
    {
        text: 'No tenemos el amor que necesitamos para amar a Dios como Él se lo merece.',
        author: 'San Francisco de Sales',
        date: '06-21',
    },
    {
        text: 'Sean pobres de todo, y el Corazón de Jesús los enriquecerá.',
        author: 'Santa Margarita Maria',
        date: '06-22',
    },
    {
        text: 'Mi mejor consejo es éste: examinar de un modo práctico cómo dar al César lo que es del César, para que al mismo tiempo se dé a Dios lo que pertenece a Dios.',
        author: 'San Juan Bosco',
        date: '06-23',
    },
    {
        text: 'Voy a pasar mi cielo haciendo el bien en la tierra.',
        author: 'Santa Teresa del Niño Jesús',
        date: '06-24',
    },
    {
        text: '¿Oh Señor que eres tan adorable y me has mandado a amarte, por qué me diste tan solo un corazón y este tan pequeño?',
        author: 'San Felipe Neri',
        date: '06-25',
    },
    {
        text: 'La Eucaristía produce una transformación progresiva en el cristiano. Es el Sol de las familias y de las Comunidades.',
        author: 'Santo Tomás de Aquino',
        date: '06-26',
    },
    {
        text: 'Uno es cristiano en la medida en que vive realmente del sacrificio eucarístico, en que celebra la Misa -no la oye- la celebra. Esto es: ofrece el sacrificio de Cristo total, del Cristo místico, el de Jesús y el suyo.',
        author: 'San Alberto Hurtado',
        date: '06-27',
    },
    {
        text: 'Algunos se atormentan buscando la manera de amar a Dios. Estas pobres almas no saben que no hay ningún método para amarle fuera de hacer lo que le agrada.',
        author: 'San Francisco de Sales',
        date: '06-28',
    },
    {
        text: 'No perdáis tan buena sazón de negociar como es la hora después de haber comulgado.',
        author: 'Santa Teresa de Jesús',
        date: '06-29',
    },
    {
        text: 'Obrando según lo que hablan y dándose a conocer por lo que hacen sin hablar.',
        author: 'San Ignacio de Antioquia',
        date: '06-30',
    },
    {
        text: 'Confío en Dios, mi creador, en todas las cosas; lo amo con todo mi corazón.',
        author: 'Santa Juana de Arco',
        date: '07-01',
    },
    {
        text: 'Ser bueno no consiste en no cometer ninguna falta, sino en saber enmendarse.',
        author: 'San Juan Bosco',
        date: '07-02',
    },
    {
        text: 'Jesucristo, ese loco de amor, me ha vuelto loca. Es martirio el que padezco al ver que corazones agradecidos a las criaturas no lo sean con aquel que lo sustenta, que les da la vida y los sostiene; que les da y ha dado todo, hasta darse Él mismo.',
        author: 'Santa Teresa de los Andes',
        date: '07-03',
    },
    {
        text: 'La cortesía es hermana de la caridad, que apaga el odio y fomenta el amor.',
        author: 'San Francisco de Asís',
        date: '07-04',
    },
    {
        text: 'El grado más perfecto de humildad es complacerse en los menosprecios y humillaciones. Vale más delante de Dios un menosprecio sufrido pacientemente por su amor, que mil ayunos y mil disciplinas.',
        author: 'San Francisco de Sales',
        date: '07-05',
    },
    {
        text: 'Salvando tu alma, serás feliz para siempre; pero, si la pierdes, lo pierdes todo: alma, cuerpo, cielo, Dios, que es tu supremo fin... y esto, por toda la eternidad.',
        author: 'San Juan Bosco',
        date: '07-06',
    },
    {
        text: 'No solamente hay que aceptar que Dios nos hiera, sino que hay que aceptar que nos hiera donde le plazca; hay que dejar la elección a Dios, porque a Él le pertenece.',
        author: 'San Francisco de Sales',
        date: '07-07',
    },
    {
        text: 'A cualquier precio que sea, es necesario que Dios esté contento.',
        author: 'San Claudio de la Colombiere',
        date: '07-08',
    },
    {
        text: '¡Dios mío! ¡Que tesoro tan inmenso es el amor a la pequeñez y a nuestra propia abyección! ¡Qué no debiéramos hacer y padecer por alcanzarlo! El alma que tanto bien posee, está segura y nada puede faltarle, porque el Todopoderoso en ella se complace y recrea.',
        author: 'Santa Margarita Maria',
        date: '07-09',
    },
    {
        text: 'Sin sonrisa no es posible demostrar amistad.',
        author: 'San Juan Bosco',
        date: '07-10',
    },
    {
        text: 'La Cruz que llevaba grabada en su corazón, a fuerza de contemplación, le rompió un día la piel, floreciéndosela en llagas.',
        author: 'San Francisco de Asís',
        date: '07-11',
    },
    {
        text: 'Amen su propia abyección; porque no hay medio más eficaz que ése para penetrar y permanecer en la amistad del Sagrado Corazón de Jesús.',
        author: 'Santa Margarita Maria',
        date: '07-12',
    },
    {
        text: 'No hay lengua capaz de explicar las dulzuras de este Sacramento, pues en la Sagrada Comunión bebemos la dulzura en la propia fuente.',
        author: 'Santo Tomás de Aquino',
        date: '07-13',
    },
    {
        text: 'La mejor manera de descubrir si tenemos el amor de Dios es ver si amamos a nuestro prójimo.',
        author: 'Santa Teresa de Avila',
        date: '07-14',
    },
    {
        text: 'Use siempre hacer muchos actos de amor, porque encienden y enternecen el alma.',
        author: 'Santa Teresa de Avila',
        date: '07-15',
    },
    {
        text: 'No se queda (el Señor) para otra cosa con nosotros sino para ayudarnos, animarnos y sustentarnos a hacer su voluntad.',
        author: 'Santa Teresa de Jesús',
        date: '07-16',
    },
    {
        text: 'Recuerda que cuando abandones esta tierra, no podrás llevar contigo nada de lo que has recibido, solamente lo que has dado: un corazón enriquecido por el servicio honesto, el amor, el sacrificio y el valor.',
        author: 'San Francisco de Asís',
        date: '07-17',
    },
    {
        text: 'La santidad no consiste en tal o cual práctica, sino en una disposición del corazón (del alma) que nos hace humildes y pequeños en los brazos de Dios, conscientes de nuestra nonada y confiados hasta la audacia en la bondad del Padre.',
        author: 'Santa Teresa de Lisieux',
        date: '07-18',
    },
    {
        text: '¡Oh, soy feliz! Pues puedo decir con verdad, que el único amor de mi corazón ha sido Él.',
        author: 'Santa Teresa de los Andes',
        date: '07-19',
    },
    {
        text: 'Recia cosa es tomar este Santísimo Sacramento indignamente.',
        author: 'Santa Teresa de Jesús',
        date: '07-20',
    },
    {
        text: 'El Señor me dio la salud, él me la quita; bendita sea su santa voluntad. Debemos estar siempre conformes con los designios de Dios.',
        author: 'San José Gabriel del Rosario Brochero',
        date: '07-21',
    },
    {
        text: 'La santidad consiste en la disposición del corazón.',
        author: 'Santa Teresa del Niño Jesús',
        date: '07-22',
    },
    {
        text: 'Quien quiera vivir con dignidad y plenitud no tiene otro camino más que reconocer al otro y buscar su bien.',
        author: 'San Juan Pablo II',
        date: '07-23',
    },
    {
        text: 'La cortesía es hermana de la caridad, que apaga el odio y fomenta el amor.',
        author: 'San Francisco de Asís',
        date: '07-24',
    },
    {
        text: 'Cuando te levantes, entra en el Sagrado Corazón de Jesús y conságrale tu cuerpo, tu alma, tu corazón y tu ser por completo, para solamente vivir por su amor y gloria.',
        author: 'Santa Margarita Maria',
        date: '07-25',
    },
    {
        text: 'Los pobres y los enfermos son el corazón de Dios. Al servirles a ellos, le servimos a nuestro señor Jesucristo.',
        author: 'San Camilo de Lelis',
        date: '07-26',
    },
    {
        text: 'El demonio no puede resistir a la gente alegre.',
        author: 'San Juan Bosco',
        date: '07-27',
    },
    {
        text: 'En el ocaso de nuestras vidas seremos juzgado en el amor.',
        author: 'San Juan de la Cruz',
        date: '07-28',
    },
    {
        text: 'La gracia divina es invisible pero es la más real y poderosa de las fuerzas.',
        author: 'San Alberto Hurtado',
        date: '07-29',
    },
    {
        text: 'El amor de Dios no ha de ser fabricado en nuestra imaginación, sino probado por obras.',
        author: 'Santa Teresa de Avila',
        date: '07-30',
    },
    {
        text: 'Yo te amo corazón amabilísimo, como a mi soberano Bien, mi dicha, mi alegría y el único digno del amor de todos los corazones.',
        author: 'Santa Margarita Maria',
        date: '07-31',
    },
    {
        text: '¡Qué grande es la vanagloria de creerse que pueda el hombre hacerse Dios! ¡Desgraciado! Por haber querido vanamante divinizarte te has rebajado hasta infrahumanizarte.',
        author: 'San Antonio de Padua',
        date: '08-01',
    },
    {
        text: '¡Oh amor eterno! Mi alma te requiere y te escoge eternamente.',
        author: 'San Francisco de Sales',
        date: '08-02',
    },
    {
        text: 'La caridad es el centro que une a la comunidad con Dios y a todos sus miembros entre sí; contribuye a la unión de los corazones y los vincula indisolublemente a Dios.',
        author: 'San Vicente de Paul',
        date: '08-03',
    },
    {
        text: 'La oración es la mejor arma que tenemos: es la llave que abre el corazón de Dios.',
        author: 'San Padre Pío',
        date: '08-04',
    },
    {
        text: 'No basta amar a los niños, es preciso que ellos se den cuenta que son amados.',
        author: 'San Juan Bosco',
        date: '08-05',
    },
    {
        text: 'Cristo, el sol divino, estaba protegido por la nube, la Virgen María, y emitía sus rayos de oro, a través de los ojos y del semblante de su Madre. Sí, el semblante de María está lleno de todas las gracias, grato a los ojos de Dios y espejo para todos los hombres.',
        author: 'San Antonio de Padua',
        date: '08-06',
    },
    {
        text: 'La voluntad de Dios es un alimento espiritual que fortifica el alma que se entrega a Él gustosa.',
        author: 'Santa Teresa de los Andes',
        date: '08-07',
    },
    {
        text: 'Yo no viviré un instante en cual no viva en el amor.',
        author: 'San Agustín',
        date: '08-08',
    },
    {
        text: 'El amor es la perfección del espíritu y la caridad es la perfección del amor.',
        author: 'San Francisco de Sales',
        date: '08-09',
    },
    {
        text: 'La dulzura en el hablar, en el obrar y en reprender, lo gana todo y a todos.',
        author: 'San Juan Bosco',
        date: '08-10',
    },
    {
        text: 'Que todo se hunda menos mi oración.',
        author: 'San Alberto Hurtado',
        date: '08-11',
    },
    {
        text: 'En la medida en que se ama algo temporal, se pierde el fruto de la caridad.',
        author: 'Santa Clara',
        date: '08-12',
    },
    {
        text: 'Debemos amar a Dios porque Él es Dios, y la medida de nuestro amor debe ser amarlo sin medida.',
        author: 'San Bernardo',
        date: '08-13',
    },
    {
        text: 'El hombre no puede ser separado de Dios, ni la política de la moral.',
        author: 'Santo Tomás Moro',
        date: '08-14',
    },
    {
        text: 'No hay que hacerse ilusiones. Nadie puede ser excelente en las cosas grandes, si primero no lo es en las pequeñas.',
        author: 'San Francisco Javier',
        date: '08-15',
    },
    {
        text: 'Debajo de aquel pan está (el Señor) tratable.',
        author: 'Santa Teresa de Jesús',
        date: '08-16',
    },
    {
        text: 'A los sacerdotes: "Cuanto sean más pecadores o más rudos o más inciviles mis feligreses, los han de tratar con más dulzura y amabilidad en el confesionario, en el púlpito y aún en el trato familiar"',
        author: 'San José Gabriel del Rosario Brochero',
        date: '08-17',
    },
    {
        text: 'Considero yo muchas veces, Cristo mío, cuán sabrosos y cuán deleitosos se muestran Tus ojos a quien te ama, y Tú, bien mío, querés mirar con amor.',
        author: 'Santa Teresa de Avila',
        date: '08-18',
    },
    {
        text: 'Sé un santo, chíflate por Cristo, sólo para esto sirve la vida.',
        author: 'San Alberto Hurtado',
        date: '08-19',
    },
    {
        text: 'El amor produce en el hombre la perfecta alegría. En efecto, sólo disfruta de veras el que vive en caridad.',
        author: 'Santo Tomás de Aquino',
        date: '08-20',
    },
    {
        text: 'Felices los que piensan antes de actuar y rezan antes de pensar, porque no se turbarán por lo imprevisible.',
        author: 'Santo Tomás Moro',
        date: '08-21',
    },
    {
        text: 'El alma unida a Dios se diviniza de tal manera que llega a pensar, a desear y obrar conforme a Jesucristo.',
        author: 'Santa Teresa de los Andes',
        date: '08-22',
    },
    {
        text: 'La perfección verdadera es amor de Dios y del prójimo.',
        author: 'Santa Teresa de Avila',
        date: '08-23',
    },
    {
        text: 'Al Corazón de Jesús le agradan mucho los servicios de los pequeños y humildes de corazón, y paga con bendiciones sus trabajos.',
        author: 'Santa Margarita Maria',
        date: '08-24',
    },
    {
        text: 'La complacencia y el movimiento de la voluntad hacia la cosa amable, es propiamente hablando, el amor.',
        author: 'San Francisco de Sales',
        date: '08-25',
    },
    {
        text: 'En Cristo mi confianza, Y de Él sólo mi asimiento, en sus cansancios mi aliento, y en su imitación mi holganza. Aquí estriba mi firmeza, aquí mi seguridad, la prueba de mi verdad, la muestra de mi firmeza.',
        author: 'Santa Teresa de Avila',
        date: '08-26',
    },
    {
        text: 'El amor de Dios es el árbol de la vida en medio del paraíso terrenal.',
        author: 'Santa Teresa de Avila',
        date: '08-27',
    },
    {
        text: 'La puerta del cielo es baja, y quien quiere entrar debe necesariamente inclinarse. Nos lo enseñó el propio Jesús, quien al morir, inclinó la cabeza.',
        author: 'San Antonio de Padua',
        date: '08-28',
    },
    {
        text: 'Porque entonces es cuando su Amor se acrece, se vigoriza, se agiganta, se rebalsa por todas partes, y se revienta, si puedo expresarme así, y hace entonces un milagro de amor: la Eucaristía.',
        author: 'San José Gabriel del Rosario Brochero',
        date: '08-29',
    },
    {
        text: 'El que posee bienes, que utilice lo necesario para comer y vestir, el resto entréguelo al hermano necesitado, por el que Cristo murió. Si no da, si hace el tacaño ante la necesidad del pobre, peca mortalmente, no está en él la gracia de Dios, ya que si la tuviese, sería generoso con el hermano.',
        author: 'San Antonio de Padua',
        date: '08-30',
    },
    {
        text: 'Conservar el buen humor en medio de las penas y enfermedades, es señal de alma recta y buena.',
        author: 'San Felipe Neri',
        date: '08-31',
    },
    {
        text: 'Quien no ama al prójimo no te ama, Señor mío.',
        author: 'Santa Teresa de Avila',
        date: '09-01',
    },
    {
        text: 'Es el amor lo que da precio a todas nuestras obras; no es por la grandeza y multiplicidad de nuestras obras por lo que agradamos a Dios, sino por el amor con que las hacemos.',
        author: 'San Francisco de Sales',
        date: '09-02',
    },
    {
        text: 'La alegría y el dolor es siempre la visita de Dios.',
        author: 'San Alberto Hurtado',
        date: '09-03',
    },
    {
        text: 'Cada profesión ha de ser concebida no sólo como un medio para ganarse la vida, de mejorar su situación económica, de labrar un porvenir a sus hijos, sino también como el ejercicio de una misión social y una colaboración al bien común de la sociedad.',
        author: 'San Alberto Hurtado',
        date: '09-04',
    },
    {
        text: 'Así, purificados interiormente, iluminados y encendidos por el ardor del Espíritu Santo, podamos seguir las huellas de tu Hijo, Nuestro Señor Jesucristo.',
        author: 'San Francisco de Asís',
        date: '09-05',
    },
    {
        text: 'Siempre encontramos que los que caminaban más cerca de Cristo fueron los que tuvieron que soportar las pruebas más grandes.',
        author: 'Santa Teresa de Ávila',
        date: '09-06',
    },
    {
        text: 'No basta cargar, es necesario amar la cruz que Jesús nos pone sobre las espaldas.',
        author: 'San Juan Bosco',
        date: '09-07',
    },
    {
        text: 'El nudo de la desobediencia de Eva fue desatado por la obediencia de María; lo que ató la virgen Eva por la incredulidad, la Virgen María lo desato por la Fé.',
        author: 'San Ireneo',
        date: '09-08',
    },
    {
        text: 'Estamos a veces tan dormidos en los vicios que ni siquiera queremos despertarnos ante las llamadas y sacudidas de la misericordia divina, y regresar a la práctica de las virtudes.',
        author: 'Santo Tomás Moro',
        date: '09-09',
    },
    {
        text: 'Si el alimento del cuerpo se debe tomar todos los días, ¿por qué no el alimento del alma?',
        author: 'San Juan Bosco',
        date: '09-10',
    },
    {
        text: 'A Dios no le placen las cosas hechas por la fuerza. Siendo Él, el Dios del amor, quiere que todo se haga por amor.',
        author: 'San Juan Bosco',
        date: '09-11',
    },
    {
        text: 'La dulzura en el hablar, en el obrar y en reprender, lo gana todo y a todos.',
        author: 'San Juan Bosco',
        date: '09-12',
    },
    {
        text: 'Cuando no comulguen, hijos, y oigan la misa, pueden comulgar espiritualmente, que es de grandísimo provecho.',
        author: 'Santa Teresa de Jesús',
        date: '09-13',
    },
    {
        text: 'Si su ojo es simple todo su cuerpo lo será.',
        author: 'San Francisco de Sales',
        date: '09-14',
    },
    {
        text: 'Lo primero que enseña Cristo Rey, y con su propio ejemplo, a quien quiera luchar por Él es la virtud de la humildad, fundamento de las demás virtudes y que permite a uno remontarse hacia las más altas metas con paso seguro.',
        author: 'Santo Tomás Moro',
        date: '09-15',
    },
    {
        text: 'Aplíquense a amar y sufrir amando. Cuando adquirimos la perfecta sabiduría, entonces haremos todo lo que Dios desea de nosotros.',
        author: 'Santa Margarita Maria',
        date: '09-16',
    },
    {
        text: 'Enséñanos, buen Señor, a servirte como mereces: a dar sin contar el costo, a luchar sin contar las heridas, a trabajar y a no buscar descanso, a laborar sin pedir recompensa excepto saber que hacemos tu voluntad.',
        author: 'San Ignacio de Loyola',
        date: '09-17',
    },
    {
        text: 'Quien se preocupa mucho de su cuerpo y poco de su alma, acaba por caer en los brazos del demonio.',
        author: 'San Juan Bosco',
        date: '09-18',
    },
    {
        text: 'Verdaderamente es venerable aquella ancianidad que no por las canas sino por los méritos blanquea.',
        author: 'San Ambrosio',
        date: '09-19',
    },
    {
        text: 'Y ¿qué mayor bien que no ser nada para el mundo ni para nosotros mismos, por ser poseídos de Dios y poseerle a Él solo?',
        author: 'Santa Margarita Maria',
        date: '09-20',
    },
    {
        text: 'Jesús te espera en la Iglesia. ¿Por qué no lo visitas a menudo? Sé apóstol de la Eucaristía.',
        author: 'San Juan Bosco',
        date: '09-21',
    },
    {
        text: '¿Cómo es posible tener corazón y no amar una tan infinita bondad?',
        author: 'San Francisco de Sales',
        date: '09-22',
    },
    {
        text: 'Felices los que están atentos a las necesidades de los demás, sin sentirse indispensables, porque serán distribuidores de alegría.',
        author: 'Santo Tomás Moro',
        date: '09-23',
    },
    {
        text: 'Debemos amar al Santo de los Santos, para hacernos santos: quién nos puede impedir esto? Si tenemos un corazón para amar y un corazón para sufrir.',
        author: 'Santa Margarita Maria',
        date: '09-24',
    },
    {
        text: 'El alma que está enamorada de Dios, es una alma gentil, humilde y paciente.',
        author: 'San Juan de la Cruz',
        date: '09-25',
    },
    {
        text: '(El Señor) quiere ahora no desampararnos, sino estarse aquí con nosotros.',
        author: 'Santa Teresa de Jesús',
        date: '09-26',
    },
    {
        text: 'Amemos a Dios con corazón sencillo y espíritu puro, eso es lo que busca Él por encima de todo.',
        author: 'San Francisco de Asís',
        date: '09-27',
    },
    {
        text: 'Me preguntas por un método para alcanzar la perfección. Yo conozco el amor y solo el amor.',
        author: 'Santa Teresa de Lisieux',
        date: '09-28',
    },
    {
        text: 'Dios mismo dispuso de modo admirable que su divinidad moderara el influjo en su humanidad de tal modo que pudiera admitir las pasiones de nuestra frágil naturaleza humana, y padecerlas con la intensidad que El quisiera.',
        author: 'Santo Tomás Moro',
        date: '09-29',
    },
    {
        text: 'Entre todas las emociones, sentimientos y afectos del alma, el amor es el único con que la criatura puede corresponder a su creador.',
        author: 'San Bernardo de Claraval',
        date: '09-30',
    },
    {
        text: 'Amemos a Dios y adorémosle con corazón sencillo y espíritu puro, que eso busca Él por encima de todo.',
        author: 'San Francisco de Asís',
        date: '10-01',
    },
    {
        text: 'Él derramará sobre ti sus bendiciones y será tu defensor, tu consolador, tu redentor y tu recompensa en la eternidad.',
        author: 'Santa Clara',
        date: '10-02',
    },
    {
        text: 'Guarden siempre su interior en silencio, hablando poco con las criaturas y mucho con Dios, padeciendo y trabajando por su amor.',
        author: 'Santa Margarita Maria',
        date: '10-03',
    },
    {
        text: 'Pidamos al Padre Eterno merezcamos recibir el nuestro Pan celestial.',
        author: 'Santa Teresa de Jesús',
        date: '10-04',
    },
    {
        text: 'Para que el amor fraterno sea realmente verdadero, debe ser tal que el bien de uno sea para el bien de todos, y el mal de uno lo sientan todos.',
        author: 'San Juan Bosco',
        date: '10-05',
    },
    {
        text: 'Buscar ocasión de contentarle con el ejercicio de la santa caridad, sintiendo y hablando bien del prójimo, asistiendo a los pobres cuando puedan, espiritual o corporalmente, mirando a Jesucristo en persona de ellos, y no haciéndoles cosa que no quisiéramos que con nosotros se hiciese.',
        author: 'Santa Margarita Maria',
        date: '10-06',
    },
    {
        text: 'Yo nunca aconsejo nada a nadie sin haberme encomendado a la Virgen Santísima. Ella es la que hace que las palabras que digo tengan eficacia en los que las escuchan.',
        author: 'Santa Teresa del Niño Jesús',
        date: '10-07',
    },
    {
        text: 'No es el juicio de los hombres que nos manifestará lo que somos. Los hombres se engañan y se dejan engañar; llaman al mal, bien y al bien, mal. Cada uno vale lo que vale delante de Dios y nada más.',
        author: 'San Antonio de Padua',
        date: '10-08',
    },
    {
        text: 'Tenemos que ganar el mundo entero y cada alma, ahora y en el futuro hasta el final de los tiempos, para la Inmaculada y a través de ella, para el Corazón Eucarístico de Jesús.',
        author: 'San Maximiliano Kolbe',
        date: '10-09',
    },
    {
        text: 'La fe y la esperanza son las dos alas del alma, con ellas se eleva de las cosas terrenas y asciende de lo visible a lo invisible.',
        author: 'San Antonio de Padua',
        date: '10-10',
    },
    {
        text: 'Felices los que saben descansar y dormir sin buscar excusas, porque llegarán a ser sabios.',
        author: 'Santo Tomás Moro',
        date: '10-11',
    },
    {
        text: 'Las maravillas que hace este santísimo Pan en los que dignamente le reciben son muy notorias.',
        author: 'Santa Teresa de Jesús',
        date: '10-12',
    },
    {
        text: 'Los que hacen profesión de pertenecer a Cristo se distinguen por sus obras.',
        author: 'San Ignacio de Antioquia',
        date: '10-13',
    },
    {
        text: 'El rostro de Dios está impreso en nuestra razón.',
        author: 'San Antonio de Padua',
        date: '10-14',
    },
    {
        text: 'Nos has creado para Ti, y nuestro corazón no descansará hasta que descanse en Ti.',
        author: 'San Agustín',
        date: '10-15',
    },
    {
        text: 'Jesús me pide que sea santa. Que haga con perfección mi deber. Que el deber es la cruz.',
        author: 'Santa Teresa de los Andes',
        date: '10-16',
    },
    {
        text: 'Hermanos y hermanas, tengan firmemente fe en lo que creen: que Cristo volverá. ¿Qué importa cuando? Prepárense para su venida. Vivan como si viniera hoy y no tendrán miedo de su venida.',
        author: 'San Agustín',
        date: '10-17',
    },
    {
        text: "Todo esta contenido en estas palabras: 'Ama al Señor tu Dios con todo tu corazón, con toda tu alma y con todas tus fuerzas: y ama a tu prójimo como a ti mismo.'",
        author: 'San Agustín',
        date: '10-18',
    },
    {
        text: 'Un sacerdote santo trabaja más que diez tibios y produce frutos más abundantes que todos ellos.',
        author: 'San Alberto Hurtado',
        date: '10-19',
    },
    {
        text: 'Tengan con todos paciencia, para merecer que todos en particular los pobres, acudan a ustedes en sus necesidades. Tengan a todo el mundo por amigo y a nadie por enemigo, en cuanto según Dios sea posible.',
        author: 'Santa Margarita Maria',
        date: '10-20',
    },
    {
        text: 'La perfección de la vida es la perfección del amor. Puesto que el amor es la vida del alma.',
        author: 'San Francisco de Sales',
        date: '10-21',
    },
    {
        text: 'La verdadera perfección consiste en esto: hacer siempre la santísima voluntad de Dios.',
        author: 'Santa Catalina de Siena',
        date: '10-22',
    },
    {
        text: 'Muere o conquista... No puede haber ninguna reserva en el amor.',
        author: 'Santa Margarita Maria',
        date: '10-23',
    },
    {
        text: 'El examen de conciencia es siempre el mejor medio para cuidar bien el alma.',
        author: 'San Ignacio de Loyola',
        date: '10-24',
    },
    {
        text: 'El santo amor establece su morada en la más alta y encumbrada región del espíritu.',
        author: 'San Francisco de Sales',
        date: '10-25',
    },
    {
        text: 'Abraza al Dios Amor y abraza al Dios del amor.',
        author: 'San Agustín',
        date: '10-26',
    },
    {
        text: 'Dios te salve, María, Madre de Dios. En Vos está y estuvo todo la plenitud de la gracia y todo bien.',
        author: 'San Francisco de Asís',
        date: '10-27',
    },
    {
        text: '¡Oh pobreza santa, por la cual, a quienes la poseen y desean, Dios les promete el Reino de los Cielos y la vida bienaventurada!',
        author: 'Santa Clara',
        date: '10-28',
    },
    {
        text: 'Bebe la preciosa sangre y agua que brotan del costado del Señor y sana tu alma con Longinos. Pero no esperes mayores signos de su bondad divina aparte de su humanidad doliente, pues después de todo esto Cristo resucitó de entre los muertos y ya no sufrirá más.',
        author: 'San Pedro Fabro',
        date: '10-29',
    },
    {
        text: 'Felices sobretodo, ustedes, si saben reconocer al Señor en todos los que encuentran, entonces habrán hallado la paz y la verdadera sabiduría.',
        author: 'Santo Tomás Moro',
        date: '10-30',
    },
    {
        text: 'Quien quiera algo que no sea Cristo, no sabe lo que quiere; quien pida algo que no sea Cristo, no sabe lo que pide; quien no trabaje por Cristo, no sabe lo que hace.',
        author: 'San Felipe Neri',
        date: '10-31',
    },
    {
        text: 'No morirá de mala muerte el que oye devotamente y con perseverancia la Santa Misa.',
        author: 'San Agustín',
        date: '11-01',
    },
    {
        text: 'Quiero que mi corazón no esté, en adelante, sino en el de Jesús y el de María, o que el de Jesús y María estén en el mío, para que ellos le comuniquen sus movimientos; y que el mío no se agite ni se mueva, sino conforme a la impresión que de ellos reciba.',
        author: 'San Claudio de la Colombiere',
        date: '11-02',
    },
    {
        text: 'Siempre obedientes y sujetos a los pies de la Santa Iglesia, firmes en la fe católica, guardemos la pobreza y la humildad y el Evangelio de Nuestro Señor Jesucristo.',
        author: 'San Francisco de Asís',
        date: '11-03',
    },
    {
        text: 'El gran enemigo de Cristo en Chile es la apatía, la indolencia, la superficialidad con que se miran todos los problemas.',
        author: 'San Alberto Hurtado',
        date: '11-04',
    },
    {
        text: '(Cuando comulgaba)... Como sabía estaba allí cierto el Señor dentro de mí, poníame a sus pies.',
        author: 'Santa Teresa de Jesús',
        date: '11-05',
    },
    {
        text: '¡Mi Misa es mi vida, y mi vida es una Misa prolongada!',
        author: 'San Alberto Hurtado',
        date: '11-06',
    },
    {
        text: 'La Fé y la esperanza son las dos alas del alma, con ellas se eleva de las cosas terrenas y asciende de lo visible a lo invisible.',
        author: 'San Antonio de Padua',
        date: '11-07',
    },
    {
        text: 'Buenos modales, andar despacio en la noche, cerrar con cuidado las puertas, hablar en voz baja para no despertar a los que duermen. Todos estos ejercicios acaban con el egoísmo innato y hacen que el niño se acostumbre a entrar en la mentalidad de los otros y a dominarse.',
        author: 'San Alberto Hurtado',
        date: '11-08',
    },
    {
        text: 'Cuando se ama no se sufre y si se sufre hasta se ama el mismo sufrimiento.',
        author: 'San Agustín',
        date: '11-09',
    },
    {
        text: '“Felices ustedes si son capaces de interpretar siempre con benevolencia las actitudes de los demás.',
        author: 'Santo Tomás Moro',
        date: '11-10',
    },
    {
        text: 'La verdadera y sólida devoción consiste en una voluntad constante, resuelta, pronta y activa de ejecutar lo que se conoce ser del agrado de Dios.',
        author: 'San Francisco de Sales',
        date: '11-11',
    },
    {
        text: '¡Qué grande es el poder de la oración! Se diría que es una reina que en todo momento tiene acceso directo al rey y puede conseguir todo lo que le pide.',
        author: 'Santa Teresa del Niño Jesús',
        date: '11-12',
    },
    {
        text: 'Para ir a Dios hay muchos caminos quizás más excelentes que el que nosotros seguimos; reconozcamos su excelencia, pero pongamos todo nuestro empeño en progresar en el camino en que Dios nos puso, porque allí es donde Él nos quiere.',
        author: 'San Francisco de Sales',
        date: '11-13',
    },
    {
        text: 'La santidad se encuentra en el camino que nos abre cada uno de nuestros días, en que se ofrecen a nosotros, con atractivo desigual, los deberes de nuestra vida cotidiana.',
        author: 'San Francisco de Sales',
        date: '11-14',
    },
    {
        text: 'Dios no manda cosas imposibles, sino que, al mandar, te enseña a que hagas cuanto puedes, y a que pidas lo que no puedes.',
        author: 'San Agustín',
        date: '11-15',
    },
    {
        text: 'Quien hace ostentación de los propios dotes y de sus buenas acciones, comete una especia de idolatría, que es el más grande de los pecados, porque llega a negar la gracia de Dios, se atribuye lo que únicamente es don de Dios.',
        author: 'San Antonio de Padua',
        date: '11-16',
    },
    {
        text: 'La puerta del cielo es baja, y quien quiere entrar debe necesariamente inclinarse. Nos lo enseñó el propio Jesús, quien al morir, inclinó la cabeza.',
        author: 'San Antonio de Padua',
        date: '11-17',
    },
    {
        text: 'Mientras conserves la alegría, te alejarás del pecado.',
        author: 'San Juan Bosco',
        date: '11-18',
    },
    {
        text: 'La hostia consagrada es un milagro de amor, es un prodigio de amor, es una maravilla de amor, es un complemento de amor, y es la prueba más acabada de su amor infinito hacia mí, hacia ustedes, hacia el hombre.',
        author: 'San José Gabriel del Rosario Brochero',
        date: '11-19',
    },
    {
        text: 'Me confieso con un hombre, pero no como a un hombre, sino como a Dios.',
        author: 'San Antonio de Padua',
        date: '11-20',
    },
    {
        text: 'Todo el bien que hagamos, hay que hacerlo por amor a Dios, y el mal que evitemos hay que evitarlo por amor de Dios.',
        author: 'San Francisco de Sales',
        date: '11-21',
    },
    {
        text: 'No suele Su Majestad pagar mal la posada si le hacen buen hospedaje.',
        author: 'Santa Teresa de Jesús',
        date: '11-22',
    },
    {
        text: 'Hijo mío, si te pones al servicio del Señor, prepara tu alma para la tentación.',
        author: 'San Antonio de Padua',
        date: '11-23',
    },
    {
        text: 'En todo amar y servir.',
        author: 'San Ignacio de Loyola',
        date: '11-24',
    },
    {
        text: 'El lobo devora con gusto a su presa; así el demonio busca, sobre todo, manchar la pureza.',
        author: 'San Antonio de Padua',
        date: '11-25',
    },
    {
        text: 'El alma no puede vivir sin amor. Todo depende de proveerle un objeto digno de ser amado.',
        author: 'San Francisco de Sales',
        date: '11-26',
    },
    {
        text: 'Por Jesús he preferido ser pobre y trabajar. Ya que Él por mi amor se hizo pobre, yo por amor a Él quiero serlo.',
        author: 'Santa Teresa de los Andes',
        date: '11-27',
    },
    {
        text: 'Donde hay caridad y sabiduría, no hay temor ni ignorancia.',
        author: 'San Francisco de Asís',
        date: '11-28',
    },
    {
        text: 'Acabando de recibir al Señor, pues tienen la misma persona delante, procuren cerrar los ojos del cuerpo y abrir los del alma, y mirar el corazón.',
        author: 'Santa Teresa de Jesús',
        date: '11-29',
    },
    {
        text: 'Quienes de veras aman a Dios, todo lo bueno aman, todo lo bueno favorecen, todo lo bueno lo dan, con los buenos se juntan siempre y los favorecen y defienden.',
        author: 'Santa Teresa de Avila',
        date: '11-30',
    },
    {
        text: 'Cuando nos sintamos demasiado atrevidos, recordemos nuestra fragilidad; cuando nos sintamos demasiado desmayadizos, recordemos la fortaleza de Cristo.',
        author: 'Santo Tomás Moro',
        date: '12-01',
    },
    {
        text: '¡Oh Señor y verdadero Dios mío! Quien no te conoce, no te ama.',
        author: 'Santa Teresa de Avila',
        date: '12-02',
    },
    {
        text: 'Comienza haciendo lo que es necesario, después lo que es posible y de repente estarás haciendo lo imposible.',
        author: 'San Francisco de Asís',
        date: '12-03',
    },
    {
        text: 'Quien evita la tentación evita el pecado.',
        author: 'San Ignacio de Loyola',
        date: '12-04',
    },
    {
        text: 'Has todo por amor y para el amor, haciendo buen uso del tiempo presente, y no estés ansioso sobre el futuro.',
        author: 'Santa Margarita Maria',
        date: '12-05',
    },
    {
        text: 'Fé que no irradia, no tiene el espíritu de Cristo.',
        author: 'San Alberto Hurtado',
        date: '12-06',
    },
    {
        text: 'Al conocer lo que Dios nos ha dado, encontraremos muchísimas cosas por las que dar gracias continuamente.',
        author: 'San Bernardo',
        date: '12-07',
    },
    {
        text: 'Halla purísimo placer en las almas anonadadas que son totalmente suyas y todo lo poseen en Él, cuando están desposeídas de si propias.',
        author: 'Santa Margarita Maria',
        date: '12-08',
    },
    {
        text: 'Para mí la oración es un impulso del corazón, una sencilla mirada al cielo, un grito de agradecimiento y de amor en las penas como en las alegrías.',
        author: 'Santa Teresa de Lisieux',
        date: '12-09',
    },
    {
        text: 'La medida del amor es amar sin medida.',
        author: 'San Bernardo de Clavaral',
        date: '12-10',
    },
    {
        text: 'Si necesito una luz especial y prudencia para desempeñar mis pesadas obligaciones, me acerco a mi Señor y busco Su consejo y luz.',
        author: 'Santo Tomás Moro',
        date: '12-11',
    },
    {
        text: 'Cuando la razón se rebela contra la verdadera fe de Cristo y se hace adicta a la herejía, huye de Cristo y se convierte en esclava del hereje al que sigue, descarriada por el diablo y perdida en los vericuetos del error.',
        author: 'Santo Tomás Moro',
        date: '12-12',
    },
    {
        text: 'El amor de Jesucristo me quita el gusto para todo, las criaturas no tienen atractivo alguno para mí, ni los ángeles ni los arcángeles pueden colmar las ansias de mi corazón, los rayos del sol, cuando contemplo el resplandeciente rostro de mi Amado, me parecen densas tinieblas.',
        author: 'San Francisco de Asís',
        date: '12-13',
    },
    {
        text: 'Has de saber, hija mía, que mis caudales y tesoros están cercados de espinas, basta determinarse a soportar las primeras punzadas, para que todo se trueque en dulzuras.',
        author: 'Santa Brígida',
        date: '12-14',
    },
    {
        text: 'María es como el arcoiris, señal de reconciliación entre Dios y los hombres.',
        author: 'San Antonio de Padua',
        date: '12-15',
    },
    {
        text: 'En mi corazón no encuentro las fuerzas suficientes para hablar de forma distinta a como me dicta mi conciencia.',
        author: 'Santo Tomás Moro',
        date: '12-16',
    },
    {
        text: 'No le parece que ha de haber cosa imposible a quien ama.',
        author: 'Santa Teresa de Avila',
        date: '12-17',
    },
    {
        text: 'El Señor se le apareció a San Juan, con la cruz a cuestas y le dijo: Juan, pídeme lo que quieras, Y el Santo respondió: Padecer, Señor, y ser por Vos despreciado.',
        author: 'San Juan de la Cruz',
        date: '12-18',
    },
    {
        text: 'Tu deseo sea de ver a Dios; tu temor, si le has de perder; tu dolor, que no le gozas, y tu gozo, de lo que te puede llevar allá, y vivirás con gran paz.',
        author: 'Santa Teresa de Jesús',
        date: '12-19',
    },
    {
        text: 'Dar, siempre dar, hasta que se nos caigan los brazos de cansancio.',
        author: 'San Alberto Hurtado',
        date: '12-20',
    },
    {
        text: 'Roguemos al mismo Jesucristo, Hijo de Dios, y pidámosle insistentemente nos conceda llegar con espíritu contrito al desierto de la confesión y merezcamos recibir esta cuaresma, el perdón de nuestras iniquidades.',
        author: 'San Antonio de Padua',
        date: '12-21',
    },
    {
        text: 'No somos cristianos por una idea o decisión ética sino por encontrarnos con Jesucristo.',
        author: 'San José Gabriel del Rosario Brochero',
        date: '12-22',
    },
    {
        text: 'No bajemos los ojos sin humillar el corazón al mismo tiempo; no demos a entender que queremos el último lugar sin quererlo verdaderamente.',
        author: 'San Francisco de Sales',
        date: '12-23',
    },
    {
        text: 'Jesús nos conoce, me conoce, no sólo de cara y nombre, sino de alma, de estado de ánimo, mis preocupaciones, deseos, proyectos.',
        author: 'San Alberto Hurtado',
        date: '12-24',
    },
    {
        text: 'María, eres la Madre del Universo. Quién no se anima al verte tan tierna, tan compasiva, a descubrir sus íntimos tormentos? Si es pecador, tus caricias lo enternecen. Si es tu fiel devoto, tu presencia solamente enciende la llama viva del amor divino.',
        author: 'Santa Teresa de los Andes',
        date: '12-25',
    },
    {
        text: 'Antes de la Comunión... suplica a esta bondadosa Madre que te preste su corazón para recibir en él a su Hijo con sus propias disposiciones.',
        author: 'San Luis Maria Griñón de Monfort',
        date: '12-26',
    },
    {
        text: 'Si me distraigo, la Eucaristía me ayuda a recogerme.',
        author: 'Santo Tomás Moro',
        date: '12-27',
    },
    {
        text: 'Mi espejo ha de ser María. Puesto que soy su hija, debo parecerme a Ella y así me pareceré a Jesús.',
        author: 'Santa Teresa de los Andes',
        date: '12-28',
    },
    {
        text: 'Dios en los santos Ejercicios me ha enseñado a mí y a ustedes que el hombre debe primero perder su honor, sus bienes o riquezas y su vida misma, antes que perder a Dios, o sea, su salvación.',
        author: 'San José Gabriel del Rosario Brochero',
        date: '12-29',
    },
    {
        text: 'Cristo sabía que muchos, por su propia debilidad física, se sentirían aterrorizados ante la idea del suplicio, y quiso llevarles consuelo al espíritu con el ejemplo de su dolor, de su tristeza, de su angustia, de su miedo.',
        author: 'Santo Tomás Moro',
        date: '12-30',
    },
    {
        text: 'La paciencia es la compañera de la sabiduría.',
        author: 'San Agustín',
        date: '12-31',
    },
]

//TODO fill with phrases
const even: Phrase[] = []

export const saints: Saints = {
    '01-01': [
        {
            saint: 'Solemnidad de la Virgen María',
            info: 'El Concilio de Éfeso establece una verdad muy querida por el pueblo cristiano: María es verdadera Madre de Cristo, que es verdadero Dios y verdadero hombre: una sola Persona con dos naturalezas, sin confusión, sin mutación, sin división.  En  consecuencia es afirmada también su maternidad divina.',
        },
        {
            saint: 's. Vicente María Strambi, Presbítero Pasionista, obispo',
            info: 'Nativo de Civitavecchia (1745-1824), contra la voluntad del padre se hace sacerdote pasionista. Gran predicador,  obispo de Macerata: cuida la formación de los seminaristas y ayuda a los pobres. Después de negarse a jurar fidelidad a Napoleón, el Papa lo convoca  a Roma como su consejero.',
        },
    ],
    '01-02': [
        {
            saint: 'ss. Basilio El Grande y Gregorio Nacianzeno, obispos y doctores de la Iglesia',
            info: 'Dos Santos que en vida estuvieron unidos por una profunda amistad, y cuya memoria litúrgica se celebra el mismo día, el 2 de enero: San Basilio (a quien está dedicada la catedral de Moscú) y San Gregorio Nacianceno.',
        },
    ],
    '01-03': [
        {
            saint: 's. Antero, papa',
            info: 'De origen griego, Papa por solo 40 días. Es martirizado en 236 bajo el emperador Maximino el Tracio por haber recolectado las Actas de los mártires en los archivos de la Iglesia de Roma para que no se perdieran. Primer Papa sepultado en las catacumbas de Calixto.',
        },
        {
            saint: 'Santa Genoveva de París, Virgen',
            info: 'Vivió alrededor de 500 en París, Genoveva, hija de nobles galo-romanos, eligió la vida ascética de las vírgenes consagradas en lugar del matrimonio. El carisma de sanaciòn y la santa vida de esta mujer mística le procuraron una gran fama de santidad. Hoy es la patrona de la capital francesa.',
        },
        {
            saint: 's. José Tomasi, sacerdote teatino, cardenal',
            info: 'Nacido en Licata, en 1649, de la noble familia siciliana de Lampedusa, renuncia al título en favor del hermano y se hace religioso teatino. Precursor de la reforma litúrgica, es nombrado cardenal por el Papa Clemente XI en 1712. Juan Pablo II lo proclama Santo en 1986.',
        },
        {
            saint: 's. Telésforo, papa y martir',
            info: 'Nacido en Calabria, de origen griego, anacoreta en Egipto y Palestina, Papa de 125 a 136. Instituyó la Misa de Medianoche en Navidad con el canto del “Gloria in excelsis Deo”, la celebración de la Pascua el domingo, el ayuno cuaresmal. Contrastó la gnosis. Murió mártir.',
        },
    ],
    '01-04': [
        {
            saint: 's. Angela de Foligno, religiosa franciscana',
            info: 'Es una de las más grandes místicas de la historia de la Iglesia de cuya espiritualidad tomaron gigantes de la fe como Teresa de Ávila e Isabel de la Trinidad. Santa Ángela de Foligno, cuya memoria se celebra el 4 de enero, ha sido canonizada por equivalencia por el Papa Francisco en 2013.',
        },
        {
            saint: 's. Isabel Ana Bayley viuda de Seton, H.C., fundadora de las Hermanas de la Caridad de s. José',
            info: 'Primera Santa de los Estados Unidos (1774-1821), viuda con 5 hijos, perteneciente a la Iglesia episcopal, se vuelve católica y funda la primera Congregación religiosa femenina del País. Se dedica al servicio de los pobres y promueve las escuelas parroquiales.',
        },
    ],
    '01-05': [
        {
            saint: 's. Eduardo, rey de Inglaterra',
            info: 'Coronado rey de Inglaterra en 1043, amadísimo por el pueblo,  es un soberano de profunda oración, manso y gentil: promueve la paz, elimina los impuestos de guerra para ayudar a los más pobres, construye un monasterio que será el primer núcleo de la Abadía de Westminster.',
        },
        {
            saint: 's. Juan N. Neumann, obispo de Filadelfia en los Estados Unidos',
            info: 'Sacerdote bohemio vivió en los Estados Unidos (1811-1860), desarrolla  su ministerio entre los pobres y los inmigrantes. Entra a los Redentoristas y es nombrado obispo de Filadelfia donde construye iglesias y escuelas, sobre todo en las periferias. Escribe un catecismo para jóvenes.',
        },
        {
            saint: 'S. Simeón el Estilita',
            info: 'Siméon (Sisan, norte de Siria 390- Alepo 459) fue el primero y más famoso de los estilitas, monjes del Oriente cristiano que hicieron de sus cenobios columnas (stylos). Entre el cielo y la tierra, rezaban y  predicaban a la multitud asombrada de esa forma desconcertante de ascetismo.',
        },
    ],
    '01-06': [
        {
            saint: 's. Carlos de Sezze, religioso franciscano',
            info: 'Nacido en 1613, hijo de campesinos, entra en la Orden de los Frailes Menores: trabaja como cocinero y portero. No obstante los escasos estudios, tiene el don de la ciencia infusa y es convocado por los Papas como consejero. Se distingue por la humildad, uniendo contemplación y caridad concreta.',
        },
        {
            saint: 's. Rafaela del Sagrado Corazón, virgen, fundadora de las Esclavas del s. Corazón de Jesús',
            info: 'Religiosa española (1850-1925), funda una Congregación dedicada a la adoración eucarística perpetua y al apostolado. Incomprendida por sus hermanas, renuncia como superiora desarrollando con gran mansedumbre los servicios más humildes aceptando todo “como si viniese de la mano de Dios”.',
        },
    ],
    '01-07': [
        {
            saint: 's. Luciano, sacerdote antioqueno, mártir',
            info: 'Sacerdote erudito y austero de Antioquia de Siria, preciso exégeta del Antiguo y del Nuevo Testamento, muere mártir en Nicomedia el 7 de enero 312, durante la persecución del emperador romano Maximino. Otro  emperador, Constantino, se hace bautizar en su tumba.',
        },
        {
            saint: 's. Raimondo de Peñafort, sacerdote dominico, confundador de los Mercedarios',
            info: 'Sacerdote de la Orden de Predicadores, san Raimundo de Peñafort profundo conocedor del derecho canónico, es invocado como protector de los juristas. Se dedicó a la formación de los misioneros. Como General de los dominicos se ocupa de los conventos de la Orden recorriendo Europa a pie.',
        },
        {
            saint: 's. Polieuto, mártir',
            info: 'En Melitene, Armenia, en el periodo de las persecuciones de Decio, se obligó al soldado romano Polieuto a reconocer a los dioses y a ofrecerles un sacrificio. Deberá pagar su firme negativa con el martirio y será bautizado con su propia sangre. Se recuerda Polieuto mártir junto con san Nearco.',
        },
    ],
    '01-08': [
        {
            saint: 's. Severino, abad, apóstol del Norico',
            info: 'Nacido de noble familia romana en Nórico, vive austero entre limosnas y ayuno, escuchado por potentes e incluso por bárbaros, impresionados por su santidad. Funda monasterios, soccorre a los pobres, defiende aldeas de las correrías de los bárbaros, uniendo acción y contemplación.',
        },
        {
            saint: 's. Lorenzo Giustiniani, patriarca de Venezia',
            info: 'Lorenzo fue el primer patriarca de Venecia en 1451. Sin sermones, sólo con la pluma y sobre todo con el ejemplo, fue un gran reformador de la Iglesia. Aunque era un noble, limosneaba con un pobre sayo y una alforja para obtener "la victoria sobre sí mismo". Fue canonizado por Alejandro VIII en 1690.',
        },
    ],
    '01-09': [
        {
            saint: 's. Andrés Corsini, carmelita, obispo de Fiesole',
            info: 'De noble familia florentina (1301-1373),  superior provincial de los carmelitas y obispo de Fiesole, restaura conventos devastados por la peste, ayuda a pobres y cumple obras de pacificación entre contrincantes de la época, pagando su empeño con la cárcel.',
        },
        {
            saint: 'b. Antonio Fatati, obispo de Ancona',
            info: 'Hijo de una familia noble de Téramo, Antonio estudió en Bolonia para ser sacerdote. A su regreso ocupó varios cargos hasta que fue nombrado obispo de Ancona en 1463. Fue un pastor prudente, generoso con los pobres y estricto consigo mismo. Fue beatificado en 1765.',
        },
    ],
    '01-10': [
        {
            saint: 's. Agatón, papa',
            info: 'Nacido en Palermo, de origen griego, Papa del 678 al 681, promueve la unidad de la Iglesia. Contrasta al monotelismo según el cual en Cristo hay una única voluntad. El Concilio de Costantinopla reitera que como en Cristo hay dos naturalezas, hay también dos voluntades, divina y humana.',
        },
        {
            saint: 's. Milciades, papa',
            info: 'Africano de origen, Milciades o Melquiades era el Papa de aquel periodo en el que Constantino venció a Majencio en la batalla de Ponte Milvio. Triunfo que determinó el fin de la persecución imperial a los cristianos. Trabajó para reorganizar la Iglesia y los lugares de culto y murió en el año 314.',
        },
        {
            saint: 'B. Gregorio X, papa',
            info: 'Cuando fue elegido Papa en el cónclave de Viterbo que duró dos años, Tebaldo Visconti no era sacerdote, sino un cruzado en Tierra Santa. Bajo el nombre de Gregorio X trabajó por la unidad con los ortodoxos en el Concilio de Lyon. Murió en 1276 y fue beatificado en 1713 por Clemente XI.',
        },
    ],
    '01-11': [
        {
            saint: 's. Iginio, papa',
            info: 'Según una antigua tradición era un filósofo de origen ateniense. Elegido Papa en el 138, muere mártir durante la persecución del emperador Antonino Pío. Rechaza con las razones del Evangelio la herejía gnóstica, que predicaba una doble religiosidad, para los simples y para los instruídos.',
        },
        {
            saint: 's. Pedro de Cesarea, mártir',
            info: 'En lugar de renegar de su fe cristiana, Pedro prefirió la fidelidad y fue quemado vivo. Estamos en el siglo III, en Cesarea de Palestina, bajo la persecución del cruel emperador Maximino, que no se apiadó ni por la joven edad de este muchacho, llamado Apsélamo o Bálsamo, y lo hizo morir como mártir.',
        },
        {
            saint: 's. Paulino de Aquileia, obispo',
            info: 'Teólogo y músico, Paulino es originario de Cividale, hoy el Friuli. Fue convocado por Carlomagno entre los Siete sabios que debían unificar Europa. En 787 fue obispo de Aquilea y trabajó por la reforma de la Iglesia. Evangelizador de Eslovenia, participó en los concilios hasta su muerte en 802.',
        },
    ],
    '01-12': [
        {
            saint: 's. Arcadio, mártir',
            info: 'Durante la persecución desencadenada por el emperador Diocleciano, escapa de su ciudad, Cesarea de Mauritania. Se entrega a la autoridad cuando un pariente es capturado en su lugar. Negándose a ofrecer sacrificios a los dioses, muere mártir entre torturas en el 304.',
        },
        {
            saint: 's. Antonio María Pucci, sacerdote',
            info: 'Antonio, cuyo nombre de seglar era Eustaquio, fue apodado por todos "el Curita". Gran devoto de la Virgen; durante 48 años fue párroco de San Andrés en Viareggio. Fue un precursor de las nuevas formas de organización de los laicos. Murió de neumonía en 1892 y fue canonizado por Juan XXIII en 1962.',
        },
    ],
    '01-13': [
        {
            saint: 's. Hilario, obispo de Poitiers y doctor de la Iglesia',
            info: 'Filósofo y literato pagano, de familia acomodada, se convierte al cristianismo en el 345. Como obispo de Poitiers se opone a la herejía arriana que contesta la doble naturaleza de Jesús, divina y humana. Padecerá también el exilio por defender la verdad.',
        },
        {
            saint: 's. Remigio, obispo de Reims',
            info: 'Nacido como ciudadano romano, Remigio vivió como obispo cristiano en Reims, en una Galia ya invadida por los francos y entre arrianos y paganos. Un evangelizador incansable por más de 70 años, logró convertir y bautizar al Rey Clodoveo en la Navidad del 1500. Murió en el 533 en olor a santidad.',
        },
    ],
    '01-14': [
        {
            saint: 's. Felix de Nola, sacerdote',
            info: 'Nacido en Nola en el siglo III hijo de un rico padre sirio, se hace sacerdote. Sufre torturas durante las persecuciones del Imperio Romano, dando un valeroso testimonio de fidelidad a Cristo. Liberado, rechaza la elección como obispo. Vive pobre, ganándose de comer trabajando.',
        },
    ],
    '01-15': [
        {
            saint: 's. Mauro, abad',
            info: 'Hijo de un patricio romano, confiado a San Benito de Nursia, de quien fue discípulo predilecto. Abad de Subiaco, funda un monasterio en Francia. En él se inspira la congregación benedictina de los Mauristas, exterminada durante la Revolucion francesa.',
        },
        {
            saint: 's. Juan Calibita, monje',
            info: 'Hijo de aristócratas, Juan vive en Constantinopla en el siglo V. A sólo 12 años de edad, huyó al monasterio de los Acemetas, cuya regla de vida era el Evangelio que siempre llevaban consigo. Después de algunos años inició una vida de mendicante justo frente a la casa de su padre, sin ser reconocido.',
        },
        {
            saint: 'S. Pablo, Primer ermitaño',
            info: 'Se sabe poco sobre Pablo, primer ermitaño cristiano. Vivió en Egipto entre los siglos III y IV. Era un noble que escapó en el desierto por las persecuciones de Decio. En su larga vida de soledad se consagró a la lectura orante de la Palabra de Dios y a la generosa penitencia a favor de sus hermanos.',
        },
    ],
    '01-16': [
        {
            saint: 's. Marcelo I, papa y mártir',
            info: 'Papa del 308 al 309,  vive las persecuciones de Diocleciano y Galerio. Contestado por los rigoristas, muestra el rostro misericordioso de la Iglesia al readmitir a los lapsi -que abjuraron de su fe-  previa penitencia. Muere mártir en exilio.',
        },
        {
            saint: 's. Priscila, matrona romana, fundadora del cementerio homónimo sobre la via Salaria',
            info: 'Esta santa romana del siglo I, no es fácil de identificar. Podría ser la esposa de Aquila, comprometida en la primera evangelización cristiana (cf Hch 18,26); o la fundadora del cementerio homónimo de la Vía Salaria que acogió a san Pedro en su casa; según otros habría sido una esclava liberada.',
        },
        {
            saint: 'San José Vaz',
            info: 'La vida del Padre José Vaz, primer indio beatificado, se desarrolla entre finales del siglo XVI y principios del XVI. San José Vaz es el apóstol de la isla de Ceilán, hoy Sri Lanka, en aquel entonces tierra de persecuciones anticatólicas. Fundó los Oratorianos; el Papa Francisco lo canonizó en 2015.',
        },
    ],
    '01-17': [
        {
            saint: 's. Antonio, abad',
            info: 'Padre del monaquismo, protector de los animales, modelo de vida cristiana. San Antonio, nacido en Coma, Egipto, alrededor del año 250, dedicó su vida al Señor. Por su capacidad de sacar de las llamas del infierno a las almas de los pecadores, el día de su fiesta se encienden hogueras en su honor.',
        },
    ],
    '01-18': [
        {
            saint: 's. Prisca, fundadora de la Iglesia homónima sobre el Aventino',
            info: 'Según antigua tradición habría sido bautizada por San Pedro y, como dice su nombre romano, habría sido la “primera” mujer en el Occidente a testimoniar con el martirio su fe en Cristo. Habría sido decapitada hacia la mitad del siglo I.',
        },
    ],
    '01-19': [
        {
            saint: 's. Germánico, mártir de Filadelfia',
            info: 'Germánico fue un discípulo muy joven de San Policarpo y también uno de los once cristianos de Filadelfia, en la actual Turquía, que fueron devorados por las bestias durante las persecuciones del Imperio Romano en el siglo II. En vez de renegar su fe, instó a sus compañeros a dar su vida por Jesús.',
        },
        {
            saint: 's. Juan, obispo de Ravenna',
            info: 'Mientras que toda la población está trastornada por la guerra contra los Longobardos, en Ravena está Juan, un santo obispo que se ocupa en modo inmejorable de resolver las necesidades de su pueblo y de su Iglesia. El Papa Gregorio Magno le envió el libro de la Regla Pastoral. Murió en el año 595.',
        },
        {
            saint: 'ss. Mario, Martha, Audifax y Abacum, mártires en la via Cornelia',
            info: 'Esta familia cristiana con dos hijos, a principios del siglo IV, salió de Persia para ir a Roma a venerar las reliquias de los mártires. Llegados a Roma ayudaron a darles una digna sepultura en la Vía Salaria. Por esta razón, los cuatro serán encarcelados y condenados al martirio.',
        },
    ],
    '01-20': [
        {
            saint: 's. Fabián, papa y mártir',
            info: 'Papa por 14 años, Fabiano cultivó las relaciones con los cristianos de Oriente y dividió Roma en siete diakonías para asistir a los pobres. Fue encarcelado y condenado a muerte en 250, en la persecución de Decio. Los cristianos lo veneraron como mártir en el cementerio de San Calisto en la Vía Apia.',
        },
        {
            saint: 's. Sebastiano, mártir',
            info: 'Nació en Milán y llegó a ser un alto oficial del ejército imperial muy estimado por Diocleciano, quien no sospechaba que fuera cristiano. Ayudó a los cristianos encarcelados y a los soldados y nobles convertidos. Descubierto, fue condenado: sobrevivió a las flechas pero fue azotado hasta su muerte.',
        },
    ],
    '01-21': [
        {
            saint: 's. Inés, virgen y mártir',
            info: 'Entre las primeras mártires de la era cristiana, Inés es una de las Santas más populares en la tradición de la Iglesia. Sacrificó su vida a los trece años durante las persecuciones del IV siglo para no traicionar su fe en Cristo. Es venerada como icono de pureza.',
        },
    ],
    '01-22': [
        {
            saint: 's. Vicente Pallotti, sacerdote, fundador de la Sociedad del Apostolado Católico',
            info: 'Sacerdote romano (1795-1850), venciendo la desconfianza del mundo eclesiástico, anticipó la promoción del papel de los laicos en la Iglesia, pues la evangelización es un deber de todos los bautizados, hombres y mujeres y no sólo del clero. Soñaba una comunidad en la que todos fueran "apóstoles".',
        },
        {
            saint: 's. Vicente, diácono español y mártir',
            info: 'Originario quizás de Zaragoza, Vincente fue el excelente diácono del obispo Valerio. Un hombre valiente y gran predicador. Arrestado durante la persecución de Diocleciano, sufrió tremendas torturas sin doblegarse. Murió martirizado en Valencia en el 304. Fue inmediatamente venerado como un santo.',
        },
        {
            saint: 's. Anastasio, monje y mártir',
            info: 'Soldado del ejército persa, el joven Magundat se sintió fascinado por Jesús y por la vida cristiana. Por eso viajó a Jeraples y luego a Jerusalén donde tomó el nombre de Anastasio. Durante siete años fue monje en Cesarea de Palestina, pero luego fue capturado, torturado y martirizado en 628.',
        },
    ],
    '01-23': [
        {
            saint: 's. Emerenciana, mártir romana',
            info: 'Cristiana sin ser bautizada, según una antigua historia, murió durante el funeral de su amiga, santa Inés, martirizada en Roma en la época de Diocleciano. Mientras los fieles huían al ser atacados por un grupo de paganos, ella no se escapó sino que los enfrentó valientemente, pero murió apedreada.',
        },
        {
            saint: 's. Ildefonso, obispo de Toledo',
            info: 'Querían que hiciera carrera eclesiástica, pero Ildefonso huyó, se refugió en un monasterio y se hizo monje. Devoto de María, escribió un famoso tratado sobre la Virgen y la Virgen se le apareció en 660, dándole la casulla con la que, primero como sacerdote y luego como obispo, celebraba las fiestas.',
        },
    ],
    '01-24': [
        {
            saint: 's. Francisco de Sales, obispo de Ginevra, doctor de la Iglesia, fundador de la Orden de la Visitación, patrón de la prensa católica',
            info: 'Francés (1567-1622), es hombre del diálogo y de la mansedumbre sin renunciar a la verdad. Es uno de los primeros evangelizadores modernos, usando volantes y carteles. Propone un modelo de vida cristiana diverso para  cada uno de los estados, y realizar en las dificultades de la vida cotidiana.',
        },
        {
            saint: 'b. José Timoteo Giaccardo, sacerdote',
            info: 'Fue el primer miembro de la Pía Sociedad de San Pablo en ser beatificado por Juan Pablo II en 1989. Originario de Alba, Piamonte, fue el primer director de la nueva casa paulina en Roma donde fue formador y evangelizador a través de un sabio uso de los medios de comunicación social.',
        },
    ],
    '01-25': [
        {
            saint: 's. Ananías, que bautizó al Apóstol Pablo en Damasco',
            info: 'Un judío de Damasco convertido al cristianismo, en una visión el Señor le pidió que fuera a buscar a Saulo de Tarso, el perseguidor que se quedó ciego después de la manifestación de Jesús. Ananías obedeció y le impuso las manos. Saulo recuperó la vista y fue bautizado. (cf Hch 9, 17-19).',
        },
        {
            saint: 'Conversión de san Pablo, apóstol',
            info: 'La Iglesia recuerda hoy la Conversión de San Pablo en el camino de Damasco, una de las más poderosas manifestaciones de la gracia divina que transformó a Saulo, el feroz perseguidor de los cristianos, en el Apóstol de los gentiles. El evento está narrado en los Hechos de los Apóstoles 9, 1-18.',
        },
    ],
    '01-26': [
        {
            saint: 'ss. Timoteo y Tito, obispos, discípulos de s. Pablo',
            info: 'Fueron los colaboradores más cercanos de san Pablo. San Timoteo, obispo, de padre pagano y madre judía, es puesto a cargo, por el Apóstol de las Gentes, de la comunidad eclesial de Efesio, mientras que san Tito, obispo, a la guía de la Iglesia de Creta. La memoria litúrgica es el 26 de enero.',
        },
        {
            saint: 's. Paola, matrona romana',
            info: 'Santa Paula es una figura femenina ejemplar entre los Santos de los primeros siglos del cristianismo. Pasó de una vida lujosa, conforme a  su noble nacimiento, a una vida dedicada al Evangelio y a la caridad hacia los pobres, gracias a la influencia del Santo doctor de la Iglesia Jerónimo',
        },
    ],
    '01-27': [
        {
            saint: 's. Angela Merici, virgen, fundadora de las Ursulinas',
            info: 'Nacida en el siglo XVI, santa Ángela Merici pasó a la historia por su visión emancipadora de la vida consagrada femenina. La Compañía de Santa Úrsula (Las Ursulinas), fundada por ella en 1535 en Brescia, es de hecho la primera Congregación femenina secular de la Iglesia. Se recuerda el 27 de enero.',
        },
        {
            saint: 's. Vitaliano, papa',
            info: 'Papa de 657 a 672, trabajó infatigablemente para subsanar los conflictos entre la Iglesia de Roma y la Iglesia de Oriente y para restablecer el diálogo con el emperador, pero sin éxito. Reavivó el cristianismo británico nombrando nuevos obispos. Fue sepultado en la antigua basílica de San Pedro.',
        },
    ],
    '01-28': [
        {
            saint: 's. Tomás de Aquino, sacerdote dominico, doctor de la Iglesia, patrón de las escuelas católicas',
            info: 'Fraile dominico y gran teólogo conocido como el Doctor Angélico, Tomás de Aquino vivió entre 1225 y 1274. Sintetizó la filosofía aristotélica y la patrística con la confianza en que la razón puede armonizarse con la fe cristiana. Es el protector de las escuelas católicas, teólogos y libreros.',
        },
    ],
    '01-29': [
        {
            saint: 'S. Sulpicio Severo',
            info: 'Sulpicio Severo nace en Aquitania, en torno al año 350, de una familia ilustre. Como tantos contemporáneos suyos, Sulpicio Severo hace su debut como abogado; en aquella época era el camino más corto para obtener honores.',
        },
        {
            saint: 'ss. Papia y Mauro, soldados, mártires en la via Nomentana',
            info: 'Sobre la Vía Nomentana, en el Coemeterium Maius, fueron sepultados dos soldados romanos que vivieron durante las persecuciones de Diocleciano: Papías y Mauro. Fueron martirizados por haberse convertido al cristianismo. Son los santos patronos de la Congregación del Oratorio de San Felipe Neri.',
        },
        {
            saint: 's. Costanzo, obispo de Perugia',
            info: 'Primer obispo de Perugia, escapó al martirio por primera vez durante las persecuciones de Marco Aurelio. Encarcelado, convirtió a sus carceleros y recuperó la libertad, pero de nuevo fue arrestado y decapitado en 170. La primera catedral de la ciudad fue construida en el lugar de su sepultura.',
        },
    ],
    '01-30': [
        {
            saint: 's. Martina, mártir',
            info: 'Martina, hija de un noble romano, se convirtió al cristianismo y comenzó a distribuir sus bienes entre los pobres. Arrestada por los guardias del emperador Alejandro Severo, fue sometida en vano a varias torturas hasta que fue decapitada. Es venerada en Roma gracias a la devoción de Urbano VIII.',
        },
        {
            saint: 's. Jacinta Marescotti, virgen romana',
            info: 'Compatrona de Viterbo con S. Biagio, S. Jacinta Marescotti fue la caprichosa hija de un príncipe. Sufrió una injusta decepción amorosa y fue recluída por la fuerza en un convento. Allí conoció Cristo, su verdadero esposo y por su amor, cuidó luego con mucha paciencia a los ancianos y a los enfermos.',
        },
    ],
    '01-31': [
        {
            saint: 's. Juan Bosco, sacerdote, fundador de los Salesianos, padre y maestro de los jóvenes',
            info: 'Fundador de los Salesianos y de las Hijas de María Auxiliadora, Juan Bosco es el santo de los jóvenes. Canonizado en 1934, durante la clausura del Año de la Redención, se le recuerda el 31 de enero. Es el patrono de los educadores, los jóvenes, los estudiantes y los editores.',
        },
        {
            saint: 's. Marcela, romana, discípula de s. Jerónimo',
            info: 'Nacida en una familia ilustre, fue la primera matrona romana que difundió los principios del monacato entre las vírgenes y viudas nobles. Reunidas en su palacio en Roma, rezaban, ayunaban y hacían penitencia bajo la guía de San Jerónimo. Marcela murió durante el saqueo de los visigodos en el 410.',
        },
    ],
    '02-01': [
        {
            saint: 'b. Ludovica Albertoni, viuda romana',
            info: 'De noble familia romana, Ludovica Albertoni sufrió un matrimonio forzado y, solo al enviudar pudo realizar su vocación de servicio a los pobres como Terciaria Franciscana, trabajando por la educación de mujeres jóvenes en peligro. Roma la recuerda por la espléndida escultura que Bernini le dedicó.',
        },
        {
            saint: 's. Brígida, abadesa en Irlanda',
            info: 'Fiel proseguidora de la obra evangelizadora de San Patricio, fue la fundadora de uno de los primeros monasterios de Irlanda en Kildare, cerca de Dublín, donde fue abadesa de las ramas masculina y femenina. En la Edad Media los peregrinos la invocaban: "Santa Brígida, protégenos en nuestro viaje".',
        },
    ],
    '02-02': [
        {
            saint: 's. Catalina de Ricci, virgen dominica de Prato',
            info: 'A los 14 años entró en el monasterio de San Vincenzo en Prato. Allí contempló la vida de Jesús con fuertes signos corporales y éxtasis, que inicialmente suscitaron el temor de fenómenos patológicos. En realidad, en el centro de su mente y de su corazón estaba la verdadera contemplación de Cristo.',
        },
        {
            saint: 's. Nicolás Saggio de Longobardi, laico mínimo',
            info: 'De origen campesino, tuvo que entrar en la Orden de los Mínimos para estudiar. Pasó por muchos conventos realizando los deberes más humildes. En Roma se ocupó material y espiritualmene de los pobres, y practicó el ayuno y la penitencia por amor a Cristo. Fue canonizado por el Papa Francisco en 2014.',
        },
    ],
    '02-03': [
        {
            saint: 's. Ansgario (Oscar), obispo de Hamburgo y Brema, apóstol de la Escandinavia',
            info: 'Originario de Corbie, Francia, Ansgario - u Oscar - toda su vida persiguió el sueño de evangelizar las tierras del Norte; por esta razón todavía hoy en día es venerado como el apóstol de Escandinavia. Un predicador incansable, fue obispo de Hamburgo y Bremen. Murió en el año 865.',
        },
        {
            saint: 's. Biagio, obispo de Sebastes y mártir',
            info: 'Médico en Armenia, más tarde obispo, según antiguos relatos realizó numerosos milagros, entre los cuales la curación de un muchacho de una espina de pez clavada en la tráquea. Por no haber renegado la fe, fue despellejado vivo en el 316. Es invocado por el dolor de garganta.',
        },
    ],
    '02-04': [
        {
            saint: 's. José de Leonessa, sacerdote capuchino',
            info: 'Nacido en 1556, se dirige a Constantinopla en donde ayuda a los cristianos prisioneros de los turcos. Quiere anunciar el Evangelio al sultán: es arrestado, torturado y desterrado. En Italia, predica la Buena Noticia a los pobres, enfermos, encarcelados, viajando a pie. Muere en Amatrice en 1612.',
        },
    ],
    '02-05': [
        {
            saint: 's. Ágata, virgen y mártir de Catania',
            info: 'La historia de Santa Águeda constituye uno de los más hermosos testimonios de fe del siglo III. La Iglesia celebra su Memoria el 5 de febrero, día en el que murió mártir en Catania (Italia). La impávida joven siciliana, sometida a horribles torturas, demostró una valiente fidelidad a Cristo.',
        },
        {
            saint: 's. Adelaida, abadesa',
            info: 'Su familia le construyó un monasterio en Vilich, Alemania. Adoptó la Regla Benedictina de las monjas de Santa María en el Capitolio, donde también su hermana era abadesa. Cuando murió su hermana, se convirtió en abadesa de los dos monasterios. Es venerada en Francia con el nombre de Alicia.',
        },
        {
            saint: 'b. Isabel Canori Mora, madre de familia',
            info: 'Esposa del prometedor abogado Cristóbal, Elizabeth por muchos años sufrirá su infidelidad conyugal; conducta que llevará su familia a la pobreza. Como Terciaria Trinitaria confiará en Jesús y rezará por su marido. Fue beatificada en 1994 por Juan Pablo II, quien la llamó "una mujer de amor heroico".',
        },
    ],
    '02-06': [
        {
            saint: 'ss. Pablo Miki, sacerdote, y Compañeros, mártires japoneses',
            info: 'Jesuita (1556-1597), primer religioso católico japonés, anuncia con coraje el Evangelio. Fue arrestado y crucificado en Nagasaki con otros 25 compañeros. Antes de morir, reitera que sólo en Jesús hay salvación, invitando a todos a seguir con alegría a Cristo y a perdonar a los enemigos.',
        },
        {
            saint: 's. Dorotea, virgen y mártir',
            info: 'Esta joven originaria de Cesarea, Capadocia, prefirió morir como mártir antes que abjurar de su fe en Jesús, el único Señor, Mesìas y Salvador que nos da la verdadera redención. Su gran poder de intercesión convirtió a personas muy escépticas como se narra en el milagro de las rosas y las manzanas.',
        },
    ],
    '02-07': [
        {
            saint: 'b. Pio IX, papa',
            info: 'Juan Maria Mastai Ferretti tomó el nombre de Pío IX y fue Papa de 1846 a 1878. Su pontificado fue el más largo de la historia de la Iglesia. Tuvo que afrontar las cuestiones políticas del poder temporal de la Iglesia respecto del Reino de Italia. Brilló por su gran sabiduría y santidad.',
        },
        {
            saint: 's. Ricardo',
            info: 'Noble inglés,  que vivió en el siglo VIII,  padre de tres santos: Villibaldo, Vunibaldo y Valburga, evangelizadores en Alemania. Era un hombre de oración, que tenía una gran veneración por la Sagrada Familia. Peregrino en Roma, muere en su camino de regreso a Lucca.',
        },
    ],
    '02-08': [
        {
            saint: 's. Josefina Bakhita, virgen',
            info: 'La suya, es una de las historias más extraordinarias de opresión y redención dentro de la Iglesia. Santa Josefina Bakhita, la esclava sudanesa que se convirtió en religiosa de las Hermanas Canossianas. Nació en 1869 en Darfur, Sudán del Sur, al servicio del Evangelio entre las religiosas canossianas',
        },
        {
            saint: 's. Jerónimo Emiliani, fundador de los Somascos, patrón de los huérfanos y de la juventud abandonada',
            info: 'Nació en Venecia en 1486 donde comenzó la carrera militar. Cayó prisionero, hizo un voto a María y fue liberado. Entonces su vida cambió radicalmente y se ocupó especialmente de los huérfanos. Fundó en Somasca la Compañía de los Servidores de los Pobres, los Clérigos Regulares llamados Somascos.',
        },
    ],
    '02-09': [
        {
            saint: 's. Apolonia, virgen y mártir de Alejandría en Egipto',
            info: 'Dedicada totalmente al apostolado, muy estimada por su valor e integridad, es capturada en el 249, ya siendo anciana, durante las feroces persecuciones del siglo III en Egipto. Negándose a rechazar la fe, es torturada: le arrancan los dientes con una pinza. Muere entre llamas.',
        },
    ],
    '02-10': [
        {
            saint: 's. Escolástica, virgen, hermana de s. Benedicto',
            info: 'Escolástica, hermana gemela de San Benito, fue la primera monja benedictina, siempre humildemente dedicada a su hermano y fiel a su Regla monástica. Después de una vida de oración, pobreza y caridad, supo vencer a Benito al obtener del Señor un milagro que solo su gran amor a Dios podía conseguir.',
        },
        {
            saint: 'ss. Zótico, Jacinto y Amancio, mártires en la via Labicana',
            info: 'Junto a estos tres mártires tenemos a san Ireneo, que también fue asesinado durante las persecuciones de Diocleciano a finales del siglo III y principios del IV. Sepultados en los antiguos cementerios de la Via Labicana, en Roma, Pascual I trasladadó sus restos a la Basílica de santa Práxedes.',
        },
    ],
    '02-11': [
        {
            saint: 's. Sotera, virgen y mártir en la via Appia',
            info: 'Joven, de familia noble pero de espíritu humilde, dedicada a obras de caridad, es arrestada en el 304 durante las persecuciones desencadenadas por Diocleciano. Abofeteada por los torturadores, muestra con valentía el rostro que es golpeado ferozmente. Negándose a rechazar la fe, es decapitada.',
        },
        {
            saint: 's. Gregorio II, papa',
            info: 'Papa de 715 a 731, San Gregorio II es recordado sobre todo por la evangelización de los pueblos nórdicos: logró que los pueblos germánicos volvieran a estar en comunión con Roma en lugar de estar sometidos al Imperio Oriental. Defensor del culto de las imágenes y de las artes sagradas.',
        },
        {
            saint: 's. Pascual I, papa',
            info: 'Abad de la Basílica de San Esteban, Pascual I fue el primer Papa en promover las misiones en los países escandinavos de 817 a 824. Fue defensor de innovadoras actividades sociales. Para facilitar la veneración popular de los mártires, trasladó sus reliquias de las catacumbas a las iglesias de Roma.',
        },
    ],
    '02-12': [
        {
            saint: 'ss. Saturnino y Compañeros, mártires de Abitene en Africa',
            info: 'Fueron 49 cristianos arrestados en el 304 por haber participado a la misa del domingo. Torturados, no renegaron su fe. Uno de ellos, interrogado sobre el por qué habían desobedecido, respondió: "Sine dominico non possumus", "No podemos vivir sin celebrar el día del Señor".',
        },
    ],
    '02-13': [
        {
            saint: 'b. Jordán de Saxonia, sacerdote dominico',
            info: 'Joven fraile dotado de palabra elocuente, corazón tierno y gran pasión por Jesús, fue el digno sucesor de santo Domingo al frente de la recién nacida Orden de Predicadores. Misionero en toda Europa, murió al regreso de una peregrinación a Tierra Santa en 1237. Fue beatificado por León XII.',
        },
    ],
    '02-14': [
        {
            saint: 'ss. Cirillo, monje y Metodio, obispo, patrones de Europa - Informaciones sobre el Santo del día',
            info: 'Desde hace casi 40 años protegen a la Europa que contribuyeron a evangelizar hace más de mil años. A los Santos, y hermanos, Cirilo y Metodio se debe la difusión del mensaje cristiano de modo especial en el este europeo, lo que indujo a Juan Pablo II a proclamarlos “compatronos” del continente.',
        },
        {
            saint: 's. Zenón, mártir en la via Appia',
            info: 'Indicado como presbítero por el Papa Pascual I, que trasladó sus reliquias al Oratorio que le fue dedicado dentro de la Basílica de Santa Práxedes en Roma, el santo ya era venerado en el siglo VII en un edificio del cementerio Pretestato, sobre la Vía Appia, que luego fue restaurado por Adriano I.',
        },
        {
            saint: 's. Valentin, mártir en la via Flaminia',
            info: 'Considerado el Santo protector de los enamorados, San Valentín se encuentra entre los santos más populares. Patrono de Terni, su fiesta se celebra el 14 de febrero.',
        },
    ],
    '02-15': [
        {
            saint: 's. Onésimo, discípulo de s. Pablo',
            info: 'Esclavo en Colosas, después de haber robado a su patrón Filemón, discípulo de San Pablo, huyó a Roma. Allí conoció a Pablo, prisionero, que lo convirtió y lo envió de vuelta a Filemón, pidiéndole que lo acogiera no ya como un esclavo sino como un hermano. (cf. Fil 1,16). Onésimo evangelizó el Asia.',
        },
        {
            saint: 'ss. Faustino y Jovita, mártires',
            info: 'Caballeros descendientes de una familia pagana de Brescia, se convirtieron al cristianismo gracias al obispo Apolonio, que nombró presbítero a Faustino y diácono a Jovita. Decapitados durante la persecución de Adriano entre el 120 y el 134, se les representa con la espada y la palma del martirio.',
        },
    ],
    '02-16': [
        {
            saint: 's. Juliana, virgen y mártir de Nicomedia, en Campania',
            info: 'Joven cristiana, su padre pagano la prometió en matrimonio al Prefecto Eleusio, también un pagano. Ella aceptó con la condición de la conversión de Eleusio. Fue luego denunciada como cristiana, arrestada, torturada y decapitada alrededor del 305, en la época del emperador romano Maximiano.',
        },
    ],
    '02-17': [
        {
            saint: 'ss. Siete Fundadores de la Orden de los Siervos de María, entre los cuales s. Alesio Falconieri',
            info: 'Llamados también septem viri o  septem fratres, fueron los padres fundadores de la Orden de los Siervos de María: todos florentinos, vivieron en el siglo XIII. Ricos mercaderes, se retiraron a la vida contemplativa. Se conmemoran juntos el 17 de febrero, fecha de la muerte del más longevo de ellos.',
        },
    ],
    '02-18': [
        {
            saint: 'b. Juan da Fiesole (b. Angélico), sacerdote dominico',
            info: 'Proclamado Patrono universal de los artistas por Juan Pablo II, su memoria se celebra el 18 de febrero, es considerado entre los máximos pintores de todos los tiempos. Se dice que ejercitaba el arte de predicar con el pincel, expresando en sus representaciones lo que contemplaba en su interior.',
        },
    ],
    '02-19': [
        {
            saint: 's. Corrado Confalonieri, eremita franciscano',
            info: 'Nació en 1290 en una familia noble de Piacenza, amante de la vida de corte, se convirtió en terciario franciscano después de una jornada de caza que causó un grave incendio. Él y su esposa donaron todos sus bienes a los pobres. Vivió como un ermitaño y asistió a los enfermos. Murió en Noto en 1351.',
        },
    ],
    '02-20': [
        {
            saint: 's. León de Catania, obispo',
            info: 'Nació en Ravena en 720, se hizo monje benedictino. Nombrado obispo de Catania, se opuso a las leyes iconoclastas del Imperio Bizantino, que imponían la destrucción de las imágenes sagradas. Obligado a vivir como ermitaño en las montañas, después de muchos años regresó a Catania donde murió en 789.',
        },
    ],
    '02-21': [
        {
            saint: 's. Pier Damiani, obispo de Ostia y cardenal, doctor de la Iglesia, camaldolense',
            info: 'San Pedro Damián está entre los santos que encontramos en el Paraíso dantesco. Santo reformador y doctor de la Iglesia, combatió la simonía y la corrupción en clero de su tiempo. Su fiesta se celebra el día 21 de febrero',
        },
    ],
    '02-22': [
        {
            saint: 's. Maximiano de Ravenna, obispo',
            info: 'Istriano de nacimiento, Maximiano fue nombrado primer arzobispo de Ravena por el emperador Justiniano, y durante diez años también sirvió como primado de Italia cuando el Papa estuvo ausente. A él se le deben las obras maestras de las iglesias de San Miguel y San Vital y la derrota del arrianismo.',
        },
        {
            saint: 's. Margarita de Cortona',
            info: 'Pobre campesina, nació en 1247. Como amante de un noble de Montepulciano, tuvo un hijo. A la muerte del noble se quedó desprovista de todo. Atraída por la vida franciscana, cambió su vida y se dedicó a los enfermos, creando el primer hospital para los pobres de Cortona, donde murió en 1297.',
        },
    ],
    '02-23': [
        {
            saint: 'S. Josefina Vannini, virgen',
            info: 'Fundadora de las Hijas de san Camilo, la Beata Josefina Vannini tardó en realizar su vocación, pero lo hizo de manera extraordinaria: de hecho, en sólo 19 años la familia femenina dedicada al cuidado de los enfermos se consolidará en el mundo. Fue beatificada por Juan Pablo II en 1994.',
        },
        {
            saint: 's. Policarpo, obispo de Esmirna y mártir',
            info: 'Nace en el año 69-70 de padres cristianos. Aprende las enseñanzas de Cristo de los Apóstoles, se convierte en discípulo de Juan. Lo narran Ireneo y Eusebio de Cesarea: "Policarpo no sólo fue educado por los Apóstoles, sino también fue establecido por los Apóstoles como obispo en Esmirna".',
        },
    ],
    '02-24': [
        {
            saint: 'ss. Evezio y Pedro, mártires',
            info: 'Ilustre cristiano de Nicomedia, rompió públicamente el Edicto en el que Diocleciano ordenaba la destrucción de iglesias y libros cristianos. Arrestado y torturado, fue quemado vivo en el 303 junto con miles de mártires cristianos. Entre ellos también estaba Pedro, un miembro del palacio imperial.',
        },
    ],
    '02-25': [
        {
            saint: 's. Néstor, obispo de Magydos y mártir',
            info: 'Durante las persecuciones del emperador Decio, defendió y ocultó a las comunidades cristianas de Panfilia, la actual Turquía. Se negó a sacrificar a los ídolos y se dejó descubrir en casa mientras rezaba. Fue arrestado, torturado y crucificado, mientras muchos fieles lo confortaban con la oración.',
        },
    ],
    '02-26': [
        {
            saint: 's. Faustiniano, obispo de Bologna',
            info: 'La tradición lo quiere como el segundo obispo de Bolonia. Con su valiente predicación fortaleció e hizo crecer las comunidades cristianas, a pesar de las persecuciones del emperador Diocleciano a principios del siglo IV. Exhortó a los creyentes a vivir y profesar su fe, a costa de pagar con la vida.',
        },
    ],
    '02-27': [
        {
            saint: 's. Gabriel de la Dolorosa clérigo pasionista',
            info: 'El santo de los jóvenes, a San Gabriel de la Dolorosa se dirigen centenares de estudiantes antes de los exámenes de graduación, en el santuario de Isola del Gran Sasso. Amante de la vida mundana, elige pues consagrarse a Dios entre los Pasionistas. Muere el 27 de febrero de 1862 a sólo 24 años.',
        },
    ],
    '02-28': [
        {
            saint: 's. Romano, abad',
            info: 'Ermitaño del siglo V, viajó al macizo del Jura en Francia con su Biblia y herramientas en su espalda. Alcanzado por su hermano Lupicino, dio vida en Condat a su primera comunidad monástica. Dócil y tolerante, la tradición lo recuerda por el abrazo y la milagrosa sanación de dos pobres leprosos.',
        },
        {
            saint: 's. Hilario, papa',
            info: 'Fue legado de León I Magno en el Concilio de Éfeso donde se enfrentó al monofisita patriarca alejandrino Dióscoro. Buscó dar soluciones a las disputas doctrinales con las Iglesias Orientales. El embellecimiento de la Basílica de Letrán se debe a él. Fue sepultado en San Lorenzo al Verano.',
        },
    ],
    '03-01': [
        {
            saint: 's. Albino, obispo de Angers',
            info: 'Monje y abad, elegido obispo por aclamación en 529, a pesar de su reticencia. Entre los promotores del Tercer Concilio de Orleans, renovó la Iglesia luchando contra la laxitud de los pastores. Defensor de pobres y prisioneros, utiliza los fondos diocesanos para liberar a los rehenes de los piratas.',
        },
        {
            saint: 's. Félix III, papa',
            info: 'Romano y Papa desde 483, Félix III afrontó al cisma del Patriarca de Constantinopla Acacio y luchó contra las herejías monofisita y arriana. Apoyó a los obispos africanos contra las invasiones de los Vándalos y readmitió en la Iglesia a aquellos cristianos que habían recibido el bautismo arriano.',
        },
    ],
    '03-02': [
        {
            saint: 's. Angela de la Cruz, virgen',
            info: 'Nació en Sevilla en 1846, eligió la vida religiosa después de una visión: al lado de la Cruz de Jesús, ve una cruz vacía. Es la suya. En 1875 funda las Hermanas de la Compañía de la Cruz, particularmente atentas a los enfermos, con el lema: «Hacerse pobre con el pobre para llevarlo a Jesús».',
        },
    ],
    '03-03': [
        {
            saint: 's. Cunegunda, esposa de s. Enrique II, emperador',
            info: 'En 1014 recibe del Papa Benedicto VIII la corona imperial en Roma con su esposo San Enrique. Ayuda a los pobres y hace construir monasterios e iglesias, como la Catedral de Bamberg. Viuda y sin hijos, se hace monja, prefiere los trabajos más humildes y cuida a las hermanas enfermas.',
        },
    ],
    '03-04': [
        {
            saint: 's. Casimiro, patrón de la Lituania',
            info: 'Nace en 1458, hijo del rey de Polonia, de origen lituano, renunció a la corona de Hungría porque el Papa estaba en contra. Se negó a casarse con la hija de Federico III de Habsburgo, sólo por ampliar el reino. Muere a los 25 años, sin dejarse vencer por la seducción del poder y el lujo.',
        },
        {
            saint: 'b. Humberto III de Saboya',
            info: 'Hubiera preferido hacerse un monje en vez de haber reinado por 40 años en el siglo XII. Amó la oración, la penitencia y el desprecio de la mundanidad en medio de los combates. Partidario de los Güelfos, defendió la Abadía de Altacomba, donde fue sepultado. Fue beatificado por Gregorio XVI en 1838.',
        },
    ],
    '03-05': [
        {
            saint: 's. Juan José de la Cruz, sacerdote franciscano',
            info: 'Nacido en Ischia en la noble familia Calosirto, Carlos Gaetano pronto se convirtió en Juan José de la Cruz y entró con los Frailes Menores Alcantarinos de Nápoles. Animado por el amor a María y la inmersión total en la pobreza, el sacerdote dirigirá la reunificación de esta familia religiosa.',
        },
        {
            saint: 's. Lucio I, papa',
            info: 'Elegido en 253, fue obligado al exilio. Al volver a Roma, se opone al rigor de los novacianos que rechazan la readmisión en la Iglesia de los cristianos que habían adorado ídolos para evitar la persecución. Lucio establece su reintegración a la comunidad después de las prácticas penitenciales.',
        },
        {
            saint: 's. Adrián, mártir',
            info: 'Nacido cerca de Rovigo en 309, desde muy joven se comprometió con la evangelización que lo llevaría a Cesarea, Palestina, para apoyar a las poblaciones locales agotadas por el hambre y la persecución. Identificado, fue martirizado en Cesarea junto con San Eubulo durante el imperio de Diocleciano.',
        },
    ],
    '03-06': [
        {
            saint: 's. Rosa de Viterbo, virgen franciscana',
            info: 'Hasta hoy no ha sido proclamada santa canónicamente, pero es venerada por el pueblo y por los Papas. Rosa, una terciaria franciscana que evangelizó toda la ciudad, proclamando la Palabra de Dios, la conversión y la penitencia, murió a los 18 años en 1251. En Viterbo se le festeja el 4 de septiembre.',
        },
        {
            saint: 's. Coletta Boylet, virgen franciscana, fundadora de las Clarisas pobres',
            info: 'La "segunda madre de las Clarisas", s. Coleta de Corbie, pasó varias experiencias entre las benedictinas y en la Tercera Orden Franciscana. Luego el Señor le inspiró renovar la vida monástica según el camino de s. Clara: austeridad, pobreza y oración litúrgica. Fue canonizada por Pío VII en 1807.',
        },
    ],
    '03-07': [
        {
            saint: 'ss. Perpetua y Felícitas, mártires',
            info: 'Mártir de Cartago bajo Septimio Severo en el 203, Perpetua fue una dama noble y Felícitas la hija menor de sus siervos. Madre reciente la primera, a punto de dar a luz la segunda, se apoyaron mutuamente en la arena hasta el final. Perpetua retrató en su diario las miserias de las cárceles romanas.',
        },
        {
            saint: 's. Teresa Margarita Redi, virgen carmelita',
            info: 'Inspirada por s. Teresa de Ávila, Teresa Margarita entró en el Carmelo de Florencia. Supo conjugar la contemplación espiritual carmelita con la dedicación práctica de cuidado por sus hermanas enfermas. Fue llamada "santa enfermera". Murió a la edad de 23 años, en 1770, Pío XI la canonizó en 1934.',
        },
    ],
    '03-08': [
        {
            saint: 's. Juan de Dios, fundador de los FatebeneFratelli, patrón de los Enfermos y trabajadores en los Hospitales',
            info: 'Después de una vida llena de diversas aventuras, en 1537 Juan de Dios se estableció en Granada. Aquí, después de escuchar un sermón de Juan de Ávila, emprendió un camino personal de conversión y penitencia. Luego comprendió su misión: amar y cuidar de los enfermos. Fue canonizado por Alejandro VIII.',
        },
    ],
    '03-09': [
        {
            saint: 'ss. Cuarenta mártires de Sebastes',
            info: 'Por haberse convertido a la religión cristiana, cuarenta soldados de diferentes partes de Capadocia, fueron arrestados en el año 320 durante las persecuciones de Licinio. Dejados desnudos en el frío invernal de Sebaste, Armenia, prefirieron heróicamente morir congelados que apostatar de su fe.',
        },
        {
            saint: 's. Catalina de Bolonia, virgen clarisa',
            info: 'Catalina se educó en la Corte Estense pero pronto prefirió el monasterio de las Clarisas de Ferrara, dedicado al Corpus Domini. Para ella era un lugar de silencio, trabajo, oración y alegría. Fundó un monasterio igual en Bolonia, donde fue abadesa hasta su muerte, en olor de santidad, en 1463.',
        },
        {
            saint: 's. Francisca romana, fundadora de las Oblatas de Tor de’ Specchi',
            info: 'Rica y noble, iluminó las calles más miserables de la Urbe. Francisca Romana (1384-1440): una de las Santas de la caridad más conocidas de la Iglesia. Una mujer anti convencional que elige el bien como finalidad de vida por amor a Cristo.',
        },
    ],
    '03-10': [
        {
            saint: 's. Juan Ogilvie, sacerdote jesuita y mártir',
            info: 'Un hombre y un santo con coraje increíble. Escocés en la Escocia protestante que tortura despiadadamente a los católicos, Juan Ogilvie a principios del s. XVII mantiene viva en secreto la fe en su tierra. Capturado y torturado por mucho tiempo, resistió sin abjurar hasta su martirio en 1615.',
        },
        {
            saint: 's. Simplicio, papa',
            info: 'Papa de 468 a 483. Simplicio vivió la caída del Imperio Romano de Occidente y se enfrentó a la herejía monofísita, que reconocía solo la naturaleza divina de Cristo. Animó la Iglesia en Italia. Defendió el papado de las migraciones bárbaras.',
        },
    ],
    '03-11': [
        {
            saint: 's. Sofronio, obispo de Jerusalén',
            info: 'Obispo de Jerusalén desde 634, s. Sofronio combatió la herejía monotelista que Sergio, Patriarca de Constantinopla sostenía, afirmando que Cristo tenía solo una voluntad, la divina y no dos, la divina y la humana. Sufrió el asedio de los árabes y obtuvo la libertad de culto para los cristianos.',
        },
        {
            saint: 's. Eulogio, sacerdote y mártir',
            info: 'Eulogio, el más notable de los "mártires de Córdoba", vivió durante la dominación árabe. Como no soportaba la tibieza de los cristianos, se propuso defender la fe en Cristo contrastando abiertamente Mahoma y el Corán. Nombrado obispo de Toledo, no pudo ser consagrado porque murió decapitado en 859.',
        },
    ],
    '03-12': [
        {
            saint: 's. Maximiliano, mártir en Africa',
            info: 'Hijo de un veterano, la ley pagana lo obligaba a convertirse en soldado. Sin embargo, ante el procónsul Dione, se negó a alistarse. Por ser cristiano, Maximiliano tampoco quiso reconocer la divinidad de los emperadores ni llevar a cabo actos de violencia. Por eso sufrió el martirio en Tebesa en 295.',
        },
        {
            saint: 's. Inocencio I, papa',
            info: 'Inocencio I era originario de Albano, Lazio. Afirmó siempre el primado de la disciplina eclesiastica de Roma sobre las iglesias de Oriente y de Occidente. Enfrentó el asedio de Roma por los Visigodos de Alarico y condenó firmemente la herejía de Pelagio en el Concilio de Milevi. Murió en el 417.',
        },
    ],
    '03-13': [
        {
            saint: 's. Sabino, mártir en Egipto',
            info: 'Nacido en Minya, Egipto, y convertido al cristianismo, s. Sabino tuvo que abandonar su casa y sus posesiones para esconderse fuera de la ciudad con otros cristianos perseguidos por el gobernador Arrio. En el 303, cuando fue descubierto su escondite, fue arrestado, torturado y arrojado al río.',
        },
        {
            saint: 's. Cristina, mártir',
            info: 'Poco se sabe de la vida de Santa Cristina, mártir en 559 bajo el emperador de Persia Cosroe I. También llamada Iadzo, hija de Iadzin, era una mujer persa convertida al cristianismo que fue perseguida y martirizada por haber creído en Jesús, muerto y resucitado y en la vida eterna de los justos.',
        },
        {
            saint: 's. Leandro, obispo de Sevilla',
            info: 'Nacido en Cartagena, hermano de Florentina, Fulgencio e Isidoro, todos ellos santos, s. Leandro, fue un monje benedictino que convirtió la dinastía real visigoda del arrianismo. Como obispo de Sevilla en 589 convocó el Concilio de Toledo para sancionar tal pasaje histórico. Murió en el año 600.',
        },
    ],
    '03-14': [
        {
            saint: 's. Matilde, reina',
            info: 'Nacida en una familia de Condes, formará la suya propia con el Duque de Sajonia y futuro Rey de Alemania y de ella descenderán cuatro emperadores. Pero más que aspirar a la riqueza, Matilde quería ser una santa y tal será proclamada en 968. Es particularmente venerada en algunas diócesis alemanas.',
        },
        {
            saint: 'b. Placido Riccardi, monje de S. Pablo Extramuros',
            info: 'Tomás nació en Umbria, Italia. Se hizo monje benedictino en 1866 y como sacerdote tomó el nombre de Plácido. Fue muy observante de la Regla y Rector de la Abadía de Farfa Sabina. Por 20 años fue confesor de las monjas ermitañas. Murió en 1915 después de haber padecido la malaria y la parálisis.',
        },
    ],
    '03-15': [
        {
            saint: 's. Zacarías, papa',
            info: 'Zacarías fue el último Papa griego. Inició su ministerio petrino en 741. Fue un grande mediador y pacificador en un tiempo de tensiones con el Imperio del Oriente y de devastaciones de los Longobardos que saqueaban Italia. Consagró al Rey Pepino el Breve, primera investidura realizada por un Papa.',
        },
        {
            saint: 's. Clemente M. Hofbauer, sacerdote redentorista',
            info: 'Clemente María nació en la actual República Checa. Fue ordenado sacerdote redentorista en 1785, a su regreso de Italia. Fundó en Austria una nueva comunidad y se ocupó de la renovación eclesial y de los pobres. Pío X lo proclamó patrón de Viena y de los panaderos, su primera ocupación de juventud.',
        },
    ],
    '03-16': [
        {
            saint: 'ss. Hilario y Taziano, mártires de Aquileia',
            info: 'Antiguos documentos atestiguan el martirio del obispo Hilario y del diácono Taziano el 16 de marzo de 284. Sus reliquias, guardadas primero en Aquileia, se trasladaron a Grado por temor a los Longobardos. Se les dedicó una iglesia, luego catedral, en la ciudad de Gorizia de la que son patronos.',
        },
    ],
    '03-17': [
        {
            saint: 's. Patricio, obispo, apóstol de Irlanda',
            info: 'Uno de los Santos más venerados en el mundo, San Patricio, patrono de Irlanda, fue reducido a la esclavitud siendo muchacho, pero gracias a la oración tuvo una auténtica conversión del corazón que lo llevó a ser un Santo misionero. La Iglesia lo recuerda el 17 de marzo.',
        },
        {
            saint: 's. Juan Sarcander, sacerdote y mártir',
            info: 'Salvar a un pueblo de la masacre y el saqueo y acabar encadenado por ser sospechado de estar de acuerdo con el invasor. Es la historia de Juan Sarkander, un jesuita del Siglo XVI. En realidad, el martirio del Santo se produjo en 1620 por odio contra la fe por parte de la mayoría protestante.',
        },
    ],
    '03-18': [
        {
            saint: 's. Cirilo, obispo de Jerusalén y doctor de la Iglesia',
            info: 'Obispo de Jerusalén en los años turbulentos de la Iglesia en el siglo IV, s. Cirilo fue un Doctor de la Iglesia que sufrió tres veces el exilio por su vigorosa defensa de la fe en la prexistencia di Cristo frente a la herejía arriana que la negaba. Es famoso por sus 24 catequesis a los catecúmenos.',
        },
        {
            saint: 's. Anselmo, obispo de Lucca',
            info: 'Uno de los hombres más cultos de su tiempo. Guiado por su tío homónimo, el futuro Papa Alejandro II, Anselmo fue obispo de Lucca en 1074. Rechazó los dones de Enrique IV, vivió un espíritu monástico y renovó la vida espiritual. Murió en 1086 en Mantua. Muy venerado, fue  canonizado al año siguiente.',
        },
    ],
    '03-19': [
        {
            saint: 'S. José, Esposo de la B. V. María, patrón de la Iglesia Universal',
            info: 'Es el santo más amado por Jesús, que lo quiso como un hijo ama a su padre. Protector de las familias y de los trabajadores, se le festeja dos veces al año: el 19 de marzo, como Esposo de María; y el 1 de mayo, como Trabajador.',
        },
    ],
    '03-20': [
        {
            saint: 's. Juan Nepomuceno, sacerdote y mártir de Praga',
            info: 'A finales del siglo XIV, en Praga, s. Juan Nepomuceno sufrió el martirio. Humilde sacerdote y predicador de la corte del rey Wenceslao IV, se opuso firmemente, pagando con su vida, a las abusivas pretensiones del monarca que violaban el carácter sagrado de la Confesión y la libertad de la Iglesia.',
        },
        {
            saint: 's. Juan, abad',
            info: 'Vivió en el siglo VI, Juan, originario de Spoleto, Umbría, se convirtió en abad de la abadía de San Esteban de Parrano, cerca de Nocera Umbra, y allí instruyó y educó a muchos jóvenes monjes en la devoción particular a Dios Padre, por medio del silencio contemplativo y de una oración muy afectiva.',
        },
    ],
    '03-21': [
        {
            saint: 's. Nicolás de la Flüe, patrón de Suiza',
            info: 'Casado y padre de 10 hijos, en 1467, a la edad de 50 años, Nicolás coronó su sueño de convertirse en ermitaño. Durante el resto de su vida vivió en una cueva, alimentándose sólo de la Eucaristía y sirviendo a la paz de su patria. Fue canonizado por Pío XII, que lo proclamó patrón de Suiza.',
        },
    ],
    '03-22': [
        {
            saint: 's. Pablo, obispo de Narbonne y mártir',
            info: 'Hacia la mitad del siglo III las primeras comunidades cristianas se dispersaron por las persecuciones de Decio. Pablo fue uno de los siete obispos enviados a predicar en Galia. Se salvó del martirio sufrido por otros compañeros, fundó la Iglesia de Narbona y fue su primer obispo alrededor del 250.',
        },
        {
            saint: 's. Lea, viuda romana',
            info: 'San Jerónimo habla de esta noble romana: una joven viuda que en lugar de casarse de nuevo con buen partido, eligió entrar en una comunidad cristiana del Aventino. Dejó su "ropa delicada" por el "sayo rústico" y se convirtió en "maestra de la perfección" de muchas chicas. Murió en el 384.',
        },
    ],
    '03-23': [
        {
            saint: 's. Toribio de Mogrovejo, obispo de Lima',
            info: 'Llamado el Apóstol del Perú, Toribio fue un distinguido jurista español que, de laico, se convirtió en obispo de Lima en 1580. Por 25 años, como buen pastor, evangelizó los pueblos indigenas y se dedicó a reformar al clero aburguesado. Santo desde 1726, es el patrón del episcopado latinoamericano.',
        },
    ],
    '03-24': [
        {
            saint: 's. Catalina de Suecia, virgen, hija de s. Brígida',
            info: 'Hija de s. Brígida, s. Catalina de Suecia, obligada por su padre, se casó con un noble. Sin embargo, se consagró a Dios y no consumó su matrimonio. La oración y la ascesis distinguieron su vida entrelazada con la de su madre. Primera abadesa del monasterio de Vadstena, murió el 24 de marzo de 1381.',
        },
    ],
    '03-25': [
        {
            saint: 's. Buen Ladrón',
            info: 'Es uno de los dos malhechores crucificados junto a Jesùs que, en el Gólgota, defiende a Jesús y recibe la promesa de Cristo de entrar ese mismo día con Èl en el paraíso. En el Evangelio apócrifo de Nicodemo del siglo IV se le llama el ladrón "Disma". Es el patrón de los prisioneros y los moribundos.',
        },
        {
            saint: 's. Quirino, mártir en la via Portuense',
            info: 'Tribuno romano que vivió entre los siglos III y IV, Quirino se convirtió al cristianismo cuando custodiaba en la cárcel a los santos Alejandro, Evencio y Teódulo. Murió también como mártir y sus reliquias fueron llevadas a Neuss, Alemania en el siglo XI. Desde entonces su culto se extendió mucho.',
        },
        {
            saint: 's. Lucía Filippini, virgen, fundadora de las Maestras Pías Filippini',
            info: 'Huérfana desde muy joven, Lucía se aferra al Señor que la llama a entrar en el monasterio de Santa Chiara en Montefiascone. Volcada al apostolado catequístico, se comprometió a promover la educación de las jovenes pobres y fundó el Instituto de las Maestras Pías Filipini. Murió en 1732.',
        },
    ],
    '03-26': [
        {
            saint: 's. Cástulo, mártir en la via Labicana',
            info: 'Funcionario ante el emperador Diocleciano, escondió a los cristianos durante las persecuciones. Traicionado por un apóstata, es arrestado y torturado, permaneciendo fiel a Cristo hasta el final. Según la tradición fue sepultado vivo en una cantera de puzolana en la vía Labicana',
        },
    ],
    '03-27': [
        {
            saint: 's. Ruperto, obispo de Salisburgo',
            info: 'De familia noble, natural de Irlanda, fue a Baviera hacia el 700 como monje itinerante. Fundó un monasterio cerca de la antigua ciudad romana de Juvavum, núcleo de la nueva Salzburgo, ciudad de la sal, de la que fue primer obispo. Murió el 27 de marzo del 718, el día de Pascua',
        },
    ],
    '03-28': [
        {
            saint: 's. Castor, mártir de Tarso',
            info: 'Se conmemora en el Martirologio Jeronimiano (el catálogo más antiguo de los mártires cristianos de la Iglesia latina, siglo V) y en el Martirologio Romano: según la tradición, habría sido martirizado en Tarso, en Cilicia (actual Turquía) con otro cristiano, Doroteo o Esteban',
        },
    ],
    '03-29': [
        {
            saint: 's. Eustasio, obispo de Nápoles',
            info: 'Asesinado en el siglo III durante las persecuciones contra los cristianos desencadenadas por los emperadores romanos, se conmemora en el Martirologio Romano, el calendario de los santos cuya primera edición oficial fue aprobada por el Papa Gregorio XIII en 1584',
        },
    ],
    '03-30': [
        {
            saint: 's. Juan Clímaco, abad del Sinai',
            info: 'Asceta y monje, formado en el monasterio del Monte Sinaí, vive principalmente como un ermitaño, pero sin descuidar al prójimo. Como abad de la comunidad monástica de origen, escribe grandes obras doctrinales, la más conocida "La Escala del Paraíso".',
        },
        {
            saint: 'b. Amadeo IX de Saboya',
            info: 'Por "razones de Estado" su matrimonio fue concertado desde su niñez con Yolanda de Valois. Pero ese matrimonio será especial pues ella, llena de fe, lo apoyará en sus tareas de gobierno realizadas atinadamente. Acogerán en su mesa a los pobres, que serán tratados siempre con bondad. Murió en 1472.',
        },
    ],
    '03-31': [
        {
            saint: 's. Balbina, matrona romana, fundadora de la Iglesia homónima',
            info: 'Hija del tribuno romano Quirino, fue bautizada, cuenta la tradición,  por el Papa Alejando I junto con su padre convertido al cristianismo. Arrestada con su padre por orden del emperador Adrián, fue decapitada después de largas torturas alrededor del 130 y sepultada en la vía Apia',
        },
        {
            saint: 's. Benjamín, diácono y mártir',
            info: 'También en Persia los primeros cristianos eran mal vistos. En el 420 Benjamín, diácono de Ergol, fue martirizado. Según la tradición, fue víctima de una represalia después de que los cristianos habían destruído el templo del dios del fuego. Benjamín no abjuró y pereció junto a un grupo de fieles.',
        },
    ],
    '04-01': [
        {
            saint: 's. Venancio, obispo de Salona y mártir',
            info: 'Obispo de la ciudad de Salona, actual Croacia, San Venancio, que vivió entre los siglos III y IV, es venerado junto con los Santos Anastasio, Mauro, Pauliniano, Telio, Sterio, Septimio, Antiochian y Graian, sus compañeros en el martirio, como él de Dalmacia e Istria.',
        },
        {
            saint: 's. Hugo, obispo de Grenoble',
            info: 'Desea ser monje, pero durante 50 años dirige la diócesis de Grenoble. Gregorio VII quería que Hugo estuviera en primera línea para restaurar las buenas costumbres del clero y enseñar al pueblo. Los 7 Papas sucesivos también lo quisieron, el último de los cuales, Inocencio II, lo canonizó en 1134.',
        },
    ],
    '04-02': [
        {
            saint: 's. Francisco de Paola, eremita, fundador de la Orden de los Mínimos',
            info: 'Fundador de la Orden de los Mínimos, patrono de Calabria y de la gente del mar, venerado como taumaturgo y protector de los pobres, que, en el Reino de Nápoles regentado por los angevinos, sufrían grave abandono y abusos.',
        },
        {
            saint: 's. María Egipciaca, penitente',
            info: 'Nacida en Alejandría, a los 12 años, María Egipcíaca huyó de su casa para ser prostituta. A los 29, en Jerusalén, una voz interior le impidió entrar en la Basílica. Se arrepintió y se fue al desierto, más allá del Jordán, donde vagó durante 47 años y donde recibió la Eucaristía del monje Zósimo.',
        },
    ],
    '04-03': [
        {
            saint: 's. Juan, obispo de Napoles',
            info: 'A Juan, obispo de Nápoles en un período sumamente turbulento, se lo recuerda por haber trasladado los restos de San Jenaro del Agro Marciano al cementerio extra-urbano. Murió la noche del Sábado Santo del año 432 mientras comenzaba la celebración litúrgica, y fue sepultado en la fiesta de Pascua.',
        },
        {
            saint: 's. Ricardo, obispo de Chichester en Inglaterra',
            info: 'Ricardo se convirtió en sacerdote después de conocer a Edmundo Rich. Como párroco, en Inglaterra, se encargó de la reforma del clero, la gratuita administración de los sacramentos, la celebración de la misa en condiciones dignas y en particular de los pobres y los enfermos. Murió en 1253 en Dover.',
        },
        {
            saint: 's. Sixto I, papa',
            info: 'Sexto suscesor de san Pedro, vivió en Roma en una época de parcial tolerancia hacia los cristianos, en la época del emperador Trajano primero y luego de Adriano. A su muerte, después de diez años de pontificado, fue sepultado en el Vaticano cerca de san Pedro.',
        },
    ],
    '04-04': [
        {
            saint: 's. Isidro, obispo de Sevilla y doctor de la Iglesia',
            info: 'Isidro es el último de los Padres Latinos y el primer obispo de Sevilla en el siglo VII. Es un autor muy leído en la Edad Media. Su obra enciclopédica constituye el principal punto de referencia del conocimiento de entonces: por esta razón se le considera un maestro para Europa.',
        },
        {
            saint: 's. Benito el Moro, franciscano',
            info: 'Nacido cerca de Messina en 1524 de descendientes de esclavos africanos, por el color de su piel Benito fue apodado “el Santo Moro”. Después de la disolución de la comunidad ermitaña del Monte Pellegrino, entró en la de los Frailes Menores, donde fue cocinero y maestro de novicios.',
        },
    ],
    '04-05': [
        {
            saint: 's. Vicente Ferrer, sacerdote dominico',
            info: 'Distinguido predicador Español de los "Padres Dominicos". Durante el gran Cisma de Occidente que comenzó en 1378, San Vicente Ferrer trabajó intensamente por la unidad de la Iglesia y la mejora de las costumbres. Murió  mientras viajaba y fue canonizado en 1458 por Calisto III.',
        },
        {
            saint: 's. Irene, virgen y mártir',
            info: 'Paz, caridad y pureza: así se hicieron bautizar las tres hermanas mártires en Tesalónica en el 304 bajo el gobernador Dulcecio, durante las persecuciones de Diocleciano. Irene es la última, culpable de haber escondido las Sagradas Escrituras y de no haber comido la comida ofrecida a los dioses.',
        },
    ],
    '04-06': [
        {
            saint: 's. Galla, viuda romana',
            info: 'Hija del cónsul romano Símaco, viuda después de sólo un año de matrimonio, Galla, convertida al cristianismo, rechazó un nuevo matrimonio y dedicó su vida al ayuno y a las obras de caridad hacia los más pobres, hasta que decidió retirarse en un monasterio. Murió alrededor del 550.',
        },
        {
            saint: 's. Pedro de Verona, sacerdote dominico y mártir',
            info: 'Hijo de maniqueos, Pedro se opuso a su familia cuando entró en la Orden Dominicana. Llegó a ser un defensor enérgico de la doctrina católica, hasta el punto de ser nombrado Inquisidor General de Lombardía. Murió mártir en el año 1252, asesinado por los mismos herejes a los que se había opuesto.',
        },
    ],
    '04-07': [
        {
            saint: 's. Juan Bautista de la Salle, sacerdote, fundador de los Hermanos de las Escuelas Cristianas',
            info: 'Juan Bautista es un sacerdote francés que se ocupa de la educación: comprende muy pronto que ser maestro es más que un trabajo: es una misión. En 1684 fundó los Hermanos de las Escuelas Cristianas, la primera congregación de laicos dedicada a la escuela popular. Fue canonizado por León XIII en 1900.',
        },
    ],
    '04-08': [
        {
            saint: 's. Dionisio, obispo de Corinto',
            info: 'Dotado de un maravilloso conocimiento de la Palabra de Dios y de gran oratoria, Dionisio se convirtió en Obispo de su ciudad, Corinto. Corría el siglo II y la primacía de la Iglesia de Roma aún no había sido establecida. Escribió ocho cartas dirigidas a otras tantas iglesias locales.',
        },
    ],
    '04-09': [
        {
            saint: 's. Liborio, obispo de Le Mans',
            info: 'Cuarto Obispo de Le Mans, elegido en el 348, Liborio dirigió la diócesis durante 49 años. Ordenó a 217 sacerdotes y 186 diáconos. Se dedicó a las obras de caridad hacia los últimos. Se le atribuye la curación de enfermos con cálculos renales. A menudo se lo representa con piedras pequeñas.',
        },
    ],
    '04-10': [
        {
            saint: 's. Magdalena de Canossa, virgen, fundadora de los Hijos y de las Hijas de Caridad',
            info: 'Fundadora de las Hijas de la Caridad, era tan determinada en el realizar la voluntad de Dios en su vida que la llamaron con el sobre nombre “Napoleón con falda”. Contraria al rigorismo, pedía a sus religiosas vivir con alegría y simplicidad.',
        },
    ],
    '04-11': [
        {
            saint: 's. Gema Galgani, virgen, terciaria pasionista',
            info: 'Nacida en 1878, Gema Galgani era una mística laica, que hizo voto de virginidad. Su existencia muestra una fe profunda: las muertes familiares y enfermedades no la distrajeron de la vida cristiana. Murió con tan sólo 25 años, el sábado Santo el 11 de abril de 1903.',
        },
        {
            saint: 's. Estanislao, obispo de Cracovia y mártir',
            info: 'Obispo de Cracovia desde 1072, Estanislao ha sido un pastor solícito con los  pobres y un gran defensor de la fe y la moral. No dudó en excomulgar al rey de Polonia Boleslao II por su vida disoluta; precisamente por esta causa fue que sufrió el martirio en 1079.',
        },
    ],
    '04-12': [
        {
            saint: 's. Julio I, papa',
            info: 'Campeón de la ortodoxia romana y defensor de la doctrina trinitaria, durante su pontificado San Julio I luchó contra los arrianos, buscando varias veces un acercamiento con ellos, primero a través del Concilio de Roma y luego de Sardica, pero sin lograrlo. Murió en el 352.',
        },
        {
            saint: 's. Zeno, obispo de Verona',
            info: 'Cuando se convirtió en obispo de Verona en el 362, Zeno fue apodado "moro y pescador" por sus orígenes norteafricanos. Durante el episcopado se enfrentó al arrianismo y al paganismo, dando un fuerte ejemplo de caridad, humildad y generosidad hacia los pobres. Hoy es el santo patrón de la ciudad.',
        },
        {
            saint: 's. José Moscati, médico de Nápoles',
            info: 'Médico y apóstol: es la síntesis perfecta que describe José Moscati, el laico que en Nápoles, a finales del siglo XIX y principios del XX, se ocupó de todos los enfermos, especialmente de los más pobres. Murió de un ataque al corazón en 1927 y fue canonizado por Juan Pablo II 60 años después.',
        },
    ],
    '04-13': [
        {
            saint: 's. Martín I, papa y mártir',
            info: 'Papa desde 649, en el Concilio de Roma Martin condenó firmemente la herejía que negaba la doble naturaleza de Jesús. Debido a tal condena doctrinal fue mal visto por el Emperador de Constantinopla: fue hecho prisionero en Crimea, murió en 655 y desde entonces ha sido venerado como mártir de la fe.',
        },
        {
            saint: 's. Ermenegildo, mártir',
            info: 'Estamos es el siglo VI. Ermenegildo es hijo del primer rey visigodo de España y es arriano. Sin embargo se casa con una católica y se convierte. Encarcelado en Tarragona, fue asesinado por orden de su padre, al negarse a recibir la comunión de un obispo arriano. Hoy es el santo patrón de España.',
        },
    ],
    '04-14': [
        {
            saint: 'ss. Tiburcio, Valeriano y Máximo, mártires en la via Appia',
            info: 'Valeriano es el esposo de Santa Cecilia de quien recibe el regalo de la fe que a su vez trasmite a su hermano Tiburcio. Los dos, que de noche enterraban a los cristianos asesinados, son condenados a muerte pero antes convierten al carcelero Máximo. Los tres mártires romanos vivieron en el siglo III.',
        },
    ],
    '04-15': [
        {
            saint: 's. Abundio, clérigo vaticano',
            info: 'Las escasas noticias de su vida nos la deja San Gregorio Magno, que describe Abundio como un hombre humilde de gran dignidad en el cumplimiento de su servicio. El Papa Gregorio también refiere el caso de una recuperación milagrosa que se habría realizado por su intercesión. Murió en el 564.',
        },
    ],
    '04-16': [
        {
            saint: 's. María Bernardita Soubirous, virgen',
            info: 'Pobre y analfabeta, se sintió mirada por María “como persona”, dijo el Papa Francisco. La Inmaculada Concepción se le apareció en la Gruta de Lourdes invitándola a rezar por los pecadores y exhortando a todos a la conversión.',
        },
        {
            saint: 's. Benito José Labre',
            info: 'Apodado "el vagabundo de Dios", el francés Benedicto decide que su monasterio será el camino. Con el crucifijo y el breviario, fue peregrino en Francia e Italia y vivió de la caridad que compartía con los demás. Pasó los últimos 6 años en Roma, donde murió en 1783. Fue canonizado por León XIII.',
        },
    ],
    '04-17': [
        {
            saint: 's. Simeón, obispo de Seleucia y mártir',
            info: 'En 324 Simeón, llamado Bar Sabba, se convirtió en obispo de Seleucia-Ctesifón, en Persia. Veinte años más tarde el rey Sapor II reavivó la persecución de los cristianos y Simeón fue víctima, junto con algunos de sus compañeros.',
        },
        {
            saint: 's. Roberto, abad de Cìteaux',
            info: 'Monje francés, está a favor de la estricta observancia de la regla benedictina y no está  de acuerdo con sus hermanos. En 1098 fundó una nueva abadía en Cîteaux, cuyos monjes se llamarían cistercienses. Murió en 1111 y fue canonizado por Honorio III un siglo después.',
        },
    ],
    '04-18': [
        {
            saint: 's. Galdino, arzobispo de Milán y cardenal',
            info: 'En 1162 Galdino fue testigo de la destrucción de Milán por Federico I, Barbarroja y se puso del lado de Alejandro III contra el antipapa Víctor VI. Creado entonces cardenal y arzobispo de la ciudad, trabajó para reconstruirla física y espiritualmente hasta su muerte en 1176.',
        },
    ],
    '04-19': [
        {
            saint: 's. León IX, papa',
            info: 'Originario de Alsacia, una región largamente disputada entre Francia y Alemania, León IX, Brunone de Dagsburg, llegó a Roma después de años de episcopado en Toul. Como Papa luchó contra la simonía y excomulgó a Miguel Cerulario, desencadenando así el Cisma de Oriente.',
        },
        {
            saint: 's. Expedito',
            info: 'No se sabe mucho de este santo, martirizado en el siglo III en Melitene y recordado junto con Elpidio y Ermogenes. Se le representa vestido de militar mientras aplasta a un cuervo que grita "mañana", o con una cruz o con un reloj que indica "hoy": por eso se le invoca para causas urgentes.',
        },
    ],
    '04-20': [
        {
            saint: 's. Aniceto, papa',
            info: 'Viene de Siria, Aniceto, Papa desde 155, tiene en el corazón la fecha de la Pascua, celebrada de manera diferente en Oriente y Occidente: por eso invita al Obispo de Esmirna, Policarpo, a Roma. Intenta llegar a un acuerdo, pero fracasa. Murió en 166 en la época de Marco Aurelio.',
        },
        {
            saint: 's. Inés da Montepulciano, virgen dominicana',
            info: 'De familia noble, a la edad de 9 años entró en la comunidad de vírgenes llamadas "monjas del saco". A los 15 años fue superiora del nuevo monasterio fundado en Proceno, Viterbo. En 1306 fundó el monasterio de Santa María Novella. Fue canonizada en 1726.',
        },
    ],
    '04-21': [
        {
            saint: 's. Anselmo, arzobispo de Canterbury y doctor de la Iglesia',
            info: 'San Anselmo fue un monje benedictino y arzobispo de Canterbury que nació en Aosta y vivió en el siglo XI entre Francia e Inglaterra. Fundador de la teología escolástica, también poseyó el carisma de un gran pastor de almas. En 1720, fue proclamado Doctor de la Iglesia y se celebra el 21 de abril.',
        },
        {
            saint: 's. Apolonio, filósofo y mártir romano',
            info: 'Murió como mártir en 185, bajo el emperador Cómodo; lo que más recordamos de Apolonio es su última oración ante el gobernador Perenio y el Senado: no su defensa, sino una apología del cristianismo, puntual y poética, que le valdrá la pena de muerte.',
        },
        {
            saint: 's. Conrado da Parzham, capuchino',
            info: 'Corrado fue el portero el convento de Santa Ana de Altötting durante 42 años. Desde que emitió los votos solemnes en 1852, hasta su muerte en 1894. Muchos se dirigen al "santo portero" en busca de una palabra de consuelo, consejo o un trozo de pan.',
        },
    ],
    '04-22': [
        {
            saint: 's. Sotero, papa',
            info: 'Nacido en Fondi, Sotero fue Papa de 166 a 175 años. Atento a las necesidades de los cristianos de Oriente, su pontificado se caracteriza por las obras de caridad y asistencia a los pobres. Fue el primero en establecer una orden de diaconado femenino.',
        },
        {
            saint: 's. Cayo, papa',
            info: 'Nacido en la ciudad dálmata de Salona, Cayo fue Papa desde el año 283 hasta el 296. Algunas personas lo señalan como el tío de Santa Susana. Durante su pontificado luchó contra las herejías y dio estructura definitiva a las órdenes inferiores del episcopado.',
        },
        {
            saint: 's. Agapito I, papa',
            info: 'Papa durante casi un año, Agapito fue enviado por el rey de los godos a Constantinopla para disuadir al emperador Justiniano de reconquistar Italia. La misión fracasó, pero el Pontífice consiguió una nueva derrota de la herejía monofisita. Murió en su camino de regreso a Roma en 536.',
        },
    ],
    '04-23': [
        {
            saint: 's. Jorge, mártir',
            info: 'Son pocos los santos que se pueden considerar que tengan un culto tan difundido y tanta veneración popular como la tiene San Jorge. Caballero, martir de Cristo entre el siglo III y el IV. Lo testimonian las innumerables iglesias dedicadas a él, y tantos países y regiones del mundo que es patrono.',
        },
        {
            saint: 's. Adalberto, obispo de Praga y mártir',
            info: 'El primer obispo eslavo de Praga, Adalberto, estudió en Magdeburgo, intentó evangelizar la ciudad, pero la tarea era difícil y estaba solo; así que fue a Roma y se convirtió en monje benedictino. En 997 murió como mártir en la costa báltica.',
        },
        {
            saint: 'María Gabriela Sagheddu, virg. cisterciense',
            info: 'De origen sardo, a los 18 años María Gabriela entró a la Acción Católica. Luego entrará al monasterio cisterciense de Grottaferrata, cerca de Roma. Fue muy breve su vida religiosa pues en 1939, a la edad de 25 años, murió de tuberculosis, ofreciendo su vida por la unidad de los cristianos.',
        },
    ],
    '04-24': [
        {
            saint: 's. María Elisabeth Hesselblad, fundadora de las Brigidinas',
            info: 'Sueca, de familia luterana, María Isabel trabajó toda su vida por la reunificación de las Iglesias, sobre todo después de su conversión al catolicismo, y en la refundación de la Orden de las Hermanas de Santa Brígida que consigue reestablecer en Suecia. Murió en 1957; fue canonizada en 2016.',
        },
        {
            saint: 'ss. María de Cleofas y Salomé, discípulas del Señor',
            info: 'Las dos están entre las mujeres que en la mañana de Pascua van al sepulcro de Jesús. María, esposa de Cleofás, madre de Santiago el Menor; Salomé es identificada como esposa de Zebedeo, madre de Santiago y Juan.',
        },
        {
            saint: 's. Fidel de Sigmaringen, sacerdote  mártir',
            info: 'Fundador, abogado, filósofo cristiano, fraile y el primer mártir entre los  capuchinos. Esta es la vida de San Fidel de Sigmaringen que partió de Alemania para evangelizar la Suiza calvinista hallando la muerte en 1622. Benedicto XIV lo canonizó.',
        },
    ],
    '04-25': [
        {
            saint: 's. Marcos, Evangelista',
            info: 'La fiesta del evangelista san Marcos, cuyo emblema es un león alado, se celebra el 25 de abril. Marcos mantuvo una estrecha relación de colaboración con san Pablo, a quien acompañó en algunos viajes, y con san Pedro, cuya predicación puso por escrito.',
        },
        {
            saint: 's. Franca, abadesa piacentina',
            info: 'Franca, entró en el monasterio benedictino de San Siro y se convirtió en abadesa. Intentó introducir la vida regular en el monasterio, pero suscitó una oposición. Más tarde, se convirtió en abadesa del monasterio de Montelana. Murió en 1218.',
        },
    ],
    '04-26': [
        {
            saint: 's. Cleto, papa y mártir',
            info: 'Probablemente de origen ateniense, Clemente, diminutivo de Anacletus, es el tercer Papa de la historia. Es el autor de la meditación en la tumba de Pedro, en el Vaticano, cerca de la cual será enterrado él mismo. Durante su Pontificado se inaugura el Coliseo en Roma.',
        },
    ],
    '04-27': [
        {
            saint: 's. Simeón, obispo de Jerusalén y mártir',
            info: 'Segundo jefe de la comunidad cristiana de Jerusalén en el siglo I, San Simeón, de cuya vida se sabe muy poco con certeza, bajo el emperador Ulpio Trajano sufrirá el martirio, como Jesús, por la crucifixión.',
        },
        {
            saint: 's. Zita, virgen',
            info: 'Nacida muy pobre, a la edad de 12 años Zita debe ir a trabajar para la noble familia Fatinelli en Lucca. Aquí sufre el acoso de otros sirvientes, pero siempre tiene una sonrisa y está lista para la caridad con los pobres. La familia reconoció sus dones y le confió la casa hasta su muerte en 1278.',
        },
    ],
    '04-28': [
        {
            saint: 's. Luis María Grignon de Montfort, sacerdote fundador de la Compañía de María',
            info: 'San Luis María Grignon de Montfort  nace en Monfort, en1673. El mayor de una familia de ocho hijos, desde muy joven gran devoto de la Santísima Virgen, y desde edad temprana cultiva una sólida espiritualidad que lo lleva a pasar largo rato arrodillado ante la imagen de la Madre de Dios.',
        },
        {
            saint: 's. Pedro Chanel, sacerdote y mártir de Oceania',
            info: 'Primer mártir de Oceanía, San Pedro Chanel, sacerdote diocesano y luego marista, ejerció su ministerio entre los campesinos de Auvergne-Rhône-Alpes, en Francia, y los nativos de la isla de Futuna, en el Pacífico. Dedicado a la Virgen, quiso ser misionero. Murió el 28 de abril de 1841.',
        },
    ],
    '04-29': [
        {
            saint: 's. Catalina de Siena, virgen, doctora de la Iglesia, Patrona de Europa y de Italia',
            info: 'Virgen y doctora de la  Iglesia, Patrona de Italia y de Europa: la liturgia recuerda a santa Catalina de Siena el 29 de abril. Esposa de Jesucristo, de quien tuvo el sello de los estigmas, se consagró con todos los esfuerzos por la paz, por el regreso del papado a Roma y por la unidad de la Iglesia.',
        },
    ],
    '04-30': [
        {
            saint: 's. Pio V, papa',
            info: 'San Pío V, elegido en el año 1566, fue un Papa dedicado a la atención de los pobres para los cuales creó el Monte de Piedad. Después de la victoriosa batalla de Lepanto, el 7 de octubre de 1571, para dar gracias a la Virgen instituyó la fiesta de la Bienaventurada Virgen del Rosario.',
        },
        {
            saint: 's. Quirino, mártir en la Via Appia',
            info: 'En el siglo III, el tribuno romano Quirino está encargado de los mártires cristianos Alejandro, Evencio y Teódulo, detenidos por orden de Tiberio. Estos últimos, se convirtieron y bautizaron con su hija Balbina. Él también sufrió el martirio en la fe.',
        },
        {
            saint: 's. Pedro Levita, diácono',
            info: 'Pedro se convirtió en Benedictino después de conocer a Gregorio Magno, futuro Papa y santo, que quería que fuera subdiácono en Sicilia y Campania y luego diácono en Roma. Pedro siempre estará a su lado, incluso cuando Gregorio se retiró al Monasterio del Celio para escribir. Murió en el 605.',
        },
    ],
    '05-01': [
        {
            saint: 's. José Obrero Esposo de la B. V. María, protector de los trabajadores',
            info: 'Hoy recordamos a san José, el padre adoptivo de Jesús, como testigo de que es suficiente un trabajo humilde, como el de un carpintero, para hacer que el hombre participe del plan divino de salvación. Los trabajadores cristianos lo veneran como su Santo Patrono.',
        },
        {
            saint: 's. Jeremías, profeta',
            info: 'Uno de los cuatro Grandes profetas hebreos, San Jeremías, del linaje de los sacerdotes de Jerusalén, predicó en el reino de Judá aún después del 587 AC. Por haber anunciado la destrucción del Templo y el cautiverio babilónico será perseguido y encarcelado. Su Libro es el 30° del Antiguo Testamento.',
        },
    ],
    '05-02': [
        {
            saint: 's. Atanasio, obispo de Alejandría en Egipto y doctor de la Iglesia',
            info: 'Durante 46 años obispo de Alejandría en Egipto. En el Concilio de Nicea San Anastasio fue la única voz de la ortodoxia contra el difuso arrianismo que negaba el dogma trinitario. No obstante que su maestro fue San Antonio Abad, Atanasio no fue un teólogo. Murió en el 373.',
        },
    ],
    '05-03': [
        {
            saint: 'ss. Felipe y Santiago el Menor, apóstoles',
            info: 'Forman parte de los Doce Apóstoles elegidos por Jesús. Son recordados el mismo día porque sus reliquias fueron traídas simultáneamente desde Ierapoli y desde Jerusalén a Roma en el siglo VI. Sus reliquias se veneran en la iglesia llamada "De los Santos Apóstoles". Ambos murieron como mártires.',
        },
        {
            saint: 'ss. Evenzio, Alejandro y Teódulo, mártires en la via Nomentana',
            info: 'Los santos mártires Evencio, Alessandro y Teodulo fueron enterrados en Roma en la séptima milla de la Via Nomentana. Inicialmente se creía que habían vivido en el segundo siglo, y luego que habrían vivido en el cuarto. Hoy se ha aclarado que Alejandro mártir no era el Papa homónimo Alejandro I.',
        },
    ],
    '05-04': [
        {
            saint: 's. Antonina, mártir de Nicea',
            info: 'Probablemente originaria de Nicea, en Bitinia - actual Turquía - Santa Antonina sufrió el martirio durante las persecuciones cristianas ordenadas por Diocleciano. Después de ser encarcelada durante dos años, sufrió las más crueles torturas antes de ser quemada viva en su ciudad natal.',
        },
    ],
    '05-05': [
        {
            saint: 's. Nuncio Sulpricio, jóven obrero de Nápoles',
            info: 'Nuncio Sulpricio murió en 1836, a 19 años de edad, debilitado en su cuerpo por su condición de trabajador explotado, pero no en su espíritu, ofreció su sufrimiento a Dios. Beatificado durante el Concilio Vaticano II por Pablo VI, fue canonizado por Francisco durante el Sínodo de los Jóvenes.',
        },
    ],
    '05-06': [
        {
            saint: 'ss. Mariano y Santiago, mártires',
            info: 'Los dos jóvenes clérigos cristianos, el diácono Mariano y el lector Santiago, habían escapado a la persecución de Decio, pero de todos modos sufrieron el martirio en 259 en Lambese, Numidia, actual Argelia, debido a que no cesaban de exhortar a sus compañeros a permanecer firmes en la fe.',
        },
    ],
    '05-07': [
        {
            saint: 's. Flavia Domitila, mártir romana',
            info: 'Vivió entre los siglos I y II, Flavia Domitila fue sobrina de Vespasiano y esposa del cónsul romano Flavio Clemente, de quien tuvo siete hijos. Convertida al cristianismo, fue acusada de "ateísmo", según la mentalidad de la época. Enseguida fue deportada a la isla de Ponza donde sufrió el martirio.',
        },
        {
            saint: 's. Rosa Venerini, virgen, fundadora de las Maestras Pías Venerini',
            info: '¿Matrimonio o clausura? Rosa Venerini de Viterbo nació en 1656 de una familia acomodada y eligió otro camino. Rezando en casa con algunas mujeres, notó su falta de preparación: fundó la primera escuela para "liberarlas de la ignorancia y el mal". Hoy en día su obra está presente en todo el mundo.',
        },
    ],
    '05-08': [
        {
            saint: 's. Bonifacio IV, papa',
            info: 'Monje benedictino originario de la Marsica que, después de 9 meses de Sede vacante en 608, fue elegido Papa como Bonifacio IV. Se le recuerda por haber consagrado el antiguo Panteón - que había recibido del Emperador Foca - a Nuestra Señora y a todos los Santos el 1° de noviembre de un año incierto.',
        },
        {
            saint: 's. Víctor, mártir de Milán',
            info: 'Milán, año 290. En el ejército imperial había tres soldados muertos: Víctor, Narbore y Félix. Los tres cristianos prefieren morir como mártires antes que abjurar de su fe. Por lo tanto se les recuerda juntos, aunque Víctor murió en Milán y los otros dos en Lodi.',
        },
        {
            saint: 's. Benito II, papa',
            info: 'Benedicto II fue estimado por Constantino IV, Emperador de Oriente. Bajo su pontificado se interrumpió la costumbre según la cual la elección del nuevo Papa debía ser ratificada por Constantinopla. Por eso, desde entonces bastó solo la aprobación del gobernador bizantino de Ravena. Murió en el 685.',
        },
        {
            saint: 's. Arsenio, diácono romano, anacoreta en Egipto',
            info: 'En la época del emperador Teodosio, entre los siglos IV y V, la Iglesia de Roma tenía entre sus diáconos a un tal Arsenio, que en cierto momento de su vida se retiró a Egipto, al monte Escete, y se convirtió en un anacoreta, un ermitaño dedicado a la contemplación y a las prácticas ascéticas.',
        },
    ],
    '05-09': [
        {
            saint: 's. Pacomio, abad',
            info: 'Pacomio es un joven del Alto Egipto alistado por la fuerza en el ejército, que pronto es encarcelado en Tebas. Convertido al cristianismo en prisión, una vez libre se puso al servicio de una comunidad, pero luego prefirió la vida de un asceta junto con otros monjes que lo seguiran.',
        },
        {
            saint: 's. Isaías, profeta',
            info: 'Descendiente de la casa real de David, San Isaías es el mayor de los llamados "Grandes Profetas" de Israel. Vivió unos ochocientos años antes de Jesús. La tradición judía dice que vivió una vida muy larga y que finalmente murió como mártir bajo Manasés.',
        },
        {
            saint: 'S. Luisa de Marillac, confundadora de las Hijas de la Caridad',
            info: 'S. Luisa de Marillac nació en Francia a finales del siglo XVI. Fue esposa fiel y madre ejemplar. Cuando enviudó dedicó su vida a la caridad y al servicio de los pobres. En 1633 fundó, junto con s. Vicente de Paúl, la Compañía de las "Hijas de la Caridad". La Iglesia la recuerda el 9 de Mayo.',
        },
    ],
    '05-10': [
        {
            saint: 's. Jordán, mártir en la via Latina',
            info: 'Perseguidor de los cristianos bajo el emperador Julián el Apóstata, Giordiano debe juzgar al presbítero Jenaro y gracias a él se convierte. Murió como mártir en el año 300; fue enterrado en la Vía Latina en una cripta que contenía las reliquias de San Epímaco: por eso a veces se recuerdan juntos.',
        },
        {
            saint: 's. Juan de Avila, sacerdote',
            info: 'Un sacerdote español de origen judío, San Juan de Ávila, vivió en el siglo XVI, un período de grandes reformas. Es un místico, gran predicador y consejero de muchos de sus contemporáneos como San Ignacio de Loyola. En 2012 Benedicto XVI lo proclamó Doctor de la Iglesia.',
        },
        {
            saint: 'ss. Quarto y Quinto, mártires en la via Latina',
            info: 'Poco se sabe de estos dos santos del siglo IV, sepultados en Roma sobre la Vía Latina. Tal vez fueron dos obispos de Capua, que murieron mártires en Roma, ciertamente después del 269. Sin embargo, los "Itinerarios" del siglo VII indican su tumba en la iglesia de los Santos Jordiano y Epímaco.',
        },
        {
            saint: 's. Job',
            info: 'El libro de Job es un Midrash. Dibuja un modelo de paciencia y santidad y el inexplicable sufrimiento de los justos, como el Cristo sufriente. Un hombre rico y feliz, pierde todo de repente, incluso sus hijos, se enferma, pero lo soporta todo diciendo: "Ýahvéh da, Yahvéh quita, ¡bendito sea Yahvéh!',
        },
    ],
    '05-11': [
        {
            saint: 's. Antimo, mártir en la via Salaria',
            info: 'Mártir de los origenes. San Antimo se esconde en una villa a lo largo de la Vía Salaria en Roma por haber convertido a un sacerdote del dios pagano Silvano y haber destruido un simulacro de esta deidad. Una vez descubierto, fue arrestado y martirizado y luego enterrado en el lugar donde solía rezar.',
        },
    ],
    '05-12': [
        {
            saint: 's. Pancracio, mártir en la via Aurelia',
            info: 'Es uno de los tantos mártires-niños de la Iglesia. San Pancracio, romano, se convierte al cristianismo, razón por la cual termina en la red de la persecución de Diocleciano. Rehúsa renegar a Cristo y es condenado a la decapitación en el año 304. Es patrono de los jóvenes de la Acción Católica.',
        },
        {
            saint: 'ss. Nereo y Achileo, mártires en la via Ardeatina',
            info: 'Nereo y Aquiles, mártires romanos del siglo III, probablemente decapitados durante la persecución anticristiana del emperador Diocleciano, fueron sepultados en Roma en el cementerio de Domitila sobre la Via Ardeatina, pero también se les venera en una basílica de las Termas de Caracalla.',
        },
        {
            saint: 's. Germán de Costantinopla, obispo',
            info: 'Germán fue un presbítero que llegó a ser Patriarca. Se ganò muchos enemigos en Constantinopla por no haber sostenido la herejía monotelista y por haber combatido las doctrinas iconoclastas. El Papa Gregorio II lo estimó por su defensa de la ortodoxia. Murió en Platanión en 732 a la edad de 98 años.',
        },
    ],
    '05-13': [
        {
            saint: 'B. María virgen de Fatima',
            info: 'El título con el cual el 13 de mayo la Iglesia celebra a María está vinculado a las apariciones de Fátima, en Portugal, en 1917. La Virgen se manifiesta por seis veces a tres pastorcillos, Lucía Dos Santos y Francisco y Jacinta Marto; pide oraciones, penitencia y conversión.',
        },
        {
            saint: 's. Andrés Huberto Fournet, sacerdote',
            info: 'San Andrés fue expulsado de Francia durante la Revolución por negarse al juramento cismático. Regresó en secreto, cuando la Iglesia volvió a ser libre, fundó las Hijas de la Cruz, una congregación para la educación cristiana de las niñas, por la que fue llamado "Buen Padre".',
        },
    ],
    '05-14': [
        {
            saint: 's. Matías, apóstol',
            info: 'Se sabe muy poco de San Matías. El dato más consistente surge de los Hechos de los Apóstoles, en que se relata que fue Matías el elegido a suerte como sucesor de Judas Iscariote en el círculo de los doce Apóstoles. De su martirio falta la evidencia histórica.',
        },
        {
            saint: 's. Miguel Garicoïts, sacerdote, fundador de los Sacerdotes del s. Corazón de Jesús de Bétharram',
            info: 'Nació en el período posrevolucionario en la Navarra francesa. Como joven sacerdote se dio cuenta de que el reto era la reevangelización de los sacerdotes, de la juventud y de los campesinos. Para ello, en 1835 fundó la Congregación de los Sacerdotes del Sagrado Corazón de Jesús en Bétharram.',
        },
    ],
    '05-15': [
        {
            saint: 's. Torcuato, obispo de Guadix',
            info: 'Torcuato vivió entre los siglos III y IV. Es el primer obispo de la ciudad de Acci, hoy Guadix, España. Según algunas fuentes, es un confesor, según otras un mártir. Se le recuerda como el primero de los "Siete Varones Españoles", obispos de varias ciudades del sur de España, venerados como santos.',
        },
        {
            saint: 's. Isidro, labrador',
            info: 'Nació en Madrid cerca de 1070. Isidro se santificó rezando, trabajando en el campo y compartiendo sus bienes con los más pobres. No faltaron las envidias, pero las superó gracias a su esposa María. Vivió en la época de las grandes batallas medievales, es el patrón de los agricultores y campesinos.',
        },
    ],
    '05-16': [
        {
            saint: 's. Ubaldo, obispo de Gubio',
            info: 'Nace en Alemania entre 1084 y 1085, pronto huérfano llega a la italiana Gubbio. Apacible y valiente, llega a ser prior y obispo de la ciudad umbra durante 31 años salvándola de diversas crisis, llegando a persuadir a Federico Barbarroja para que levantara un asedio. Santo desde 1192.',
        },
        {
            saint: 's. Alejandro, obispo de Jerusalén y mártir',
            info: 'Originario de Capadocia, Alejandro fue obispo de la Ciudad  Santa de Jerusalén, de la cual tomó el cuidado pastoral fundando una  biblioteca y una escuela. Cuando recomenzó la persecución contra los cristianos bajo el emperador Decio, fue encarcelado y murió en 250, a causa de inauditas privaciones.',
        },
    ],
    '05-17': [
        {
            saint: 's. Víctor, mártir en la via Salaria antigua',
            info: 'Mártir romano del siglo IV. Poco se sabe de él. Por antiguos testimonios sabemos que fue enterrado en el cementerio de Basilla, que se ubica sobre la antigua Vía Salaria.',
        },
        {
            saint: 's. Pascual Baylon, laico franciscano, patrón de las Asociaciones eucarísticas',
            info: 'Pascual nació en Aragón, es pastor. Solo hasta el segundo intento logra entrar con los franciscanos alcantarinos de Santa María de Loreto, pero permanece siendo seglar. Por su devoción se le llama "el Serafín de la Eucaristía". Murió en 1592, fue canonizado en 1690.',
        },
    ],
    '05-18': [
        {
            saint: 's. Félix de Cantalice, religioso capuchino',
            info: 'Fraile investigador y místico, nace en Cantalice (Rieti) en 1515. Tras convertirse en monje Capuchino, durante 40 años, hasta su muerte, en 1587, fue mendicante en Roma. Amigo de Felipe Neri y de Sixto V, se dedicó a orar intensamente y a una vida de caridad. Clemente XI lo canoniza en 1712.',
        },
        {
            saint: 's. Juan I, papa y mártir',
            info: 'Nacido en Toscana, Juan I fue Papa de 523 a 526 y tuvo que luchar contra la herejía del arrianismo. Para arreglar la ruptura, Teodorico, rey de los godos, lo envió a Constantinopla, pero a su regreso lo hizo encarcelar en Ravena, donde murió. Fue considerado un mártir por la Iglesia latina.',
        },
    ],
    '05-19': [
        {
            saint: 'S. Pedro Celestino V, papa (Pedro de Morone)',
            info: 'Contemplativo, amante del silencio, San Pedro Celestino V Papa es recordado por la Iglesia el 19 de mayo. El Santo es conocido por haber puesto en marcha el Jubileo del "Perdón" de L\'Aquila en 1294 y por su breve Pontificado que culminó con la renuncia pocos meses después de las elecciones.',
        },
        {
            saint: 's. Urbano I, papa',
            info: 'Nacido bajo el emperador Diocleciano, muerto bajo Septimio Severo. De San Urbano I, Papa entre el 223 y el 230, hay pocas noticias ciertas. Decidido y práctico en la defensa de los derechos de la comunidad cristiana, muere probablemente como un mártir, aunque si las fuentes históricas no son claras.',
        },
        {
            saint: 'ss. Partenio y Calógero, mártires en la via Appia',
            info: 'Estos dos mártires murieron en el 304 y se recuerdan el día de su martirio. Fueron enterrados en el cementerio de San Calisto en Roma. Probablemente eran dos hermanos de origen armenio que un tal Emiliano, en el momento de su muerte, les confió a su hija Anatolia Calista y por eso los hizo eunucos.',
        },
        {
            saint: 's. Ivo, sacerdote, abogado de los pobres',
            info: 'Nacido en Bretaña en 1235, Ivo se formó en teología y derecho convirtiéndose pronto en sacerdote y abogado gracias a un patrocinio gratuito. Alojó a los pobres y necesitados en su castillo sin descuidar la predicación en las parroquias entre Tredez y Louannec. Fue canonizado en 1347 por Clemente VI.',
        },
        {
            saint: 's. Crispino de Viterbo, religioso capuchino',
            info: 'Pedro Fioretti ingresó a la Orden de los Frailes Menores Capuchinos en 1693 como Fray Crispín. Durante 40 años vivió en Orvieto, primero como horticultor, luego como mendicante. Fue canonizado por Juan Pablo II en 1982.',
        },
    ],
    '05-20': [
        {
            saint: 's. Bernardino de Siena, sacerdote franciscano',
            info: 'Escuchado por Papas y analfabetos por su estilo de predicación sin bizantinismos, Bernardino de Siena es uno de los santos franciscanos más conocidos y un gran reformador de su Orden en el siglo XV. Fue proclamado Santo por San Nicolás V en 1450, sólo seis años después de su muerte.',
        },
        {
            saint: 's. Aurea, mártir de Ostia',
            info: 'En la época del emperador Claudio, siglo primero, la romana Áurea, convertida al cristianismo fue torturada, por no renegar de su fe. Expulsada de su ciudad, Ostia.  Allí fue arrestada de nuevo y martirizada.',
        },
    ],
    '05-21': [
        {
            saint: 's. Eugenio de Mazenod, obispo de Marsiglia, fundador de los Oblatos de María Inmaculada',
            info: 'De familia noble, San Eugenio de Mazenod se salva de la revolución francesa y en lugar de la vida de la corte elige el sacerdocio. En 1816 funda la Sociedad de los misioneros de Provenza, más tarde Oblatos de María Inmaculada, que se difunden por el mundo. Obispo de Marsella, falleció en 1861.',
        },
        {
            saint: 'ss. Cristóforo Magallanes, sac., y Compañeros, mártires en México',
            info: 'En el período más difícil para la Iglesia mexicana perseguida, el sacerdote Cristóbal Magallanes, con 24 compañeros, fueron asesinadon en odio a la fe el 25 de mayo de 1927. Estos mártires fueron canonizados por Juan Pablo II en el año 2000, durante el Gran Jubileo.',
        },
    ],
    '05-22': [
        {
            saint: 's. Rita de Casia, religiosa agustina',
            info: 'La Iglesia recuerda a Santa Rita el 22 de mayo. Es conocida como la santa de los casos imposibles, después de que gracias a su intercesión se hayan resuelto milagrosamente situaciones sin esperanza.  Sus restos permanecen expuestos en la Basílica de Casia.',
        },
        {
            saint: 's. Julia, virgen y mártir en Córsega',
            info: 'Patrona de Córcega, es una de las jóvenes cartaginesas que un mercante de esclavos quería vender en la Galia. Fue raptada en un puerto de Córcega. Fiel a su fe, rechazó sacrificarse a una divinidad pagana. Su fiesta se celebra el 22 de mayo.',
        },
    ],
    '05-23': [
        {
            saint: 's. Juan Bautista de Rossi, sacerdote romano',
            info: 'Originario de Alejandría, ordenado sacerdote en Roma en 1721. Fundó la Pía Unión de Sacerdotes Seculares; en la ciudad se hizo famoso como confesor y la gente buscaba tenerlo como padre espiritual. Murió en 1764.',
        },
    ],
    '05-24': [
        {
            saint: 's. Vicente de Lérins, sacerdote',
            info: 'Nacido en Galia en el siglo V, Vicente se retiró como monje. A una edad avanzada, escribió un manual para vivir plenamente el Evangelio, llamado el “Commonitorium”. Murió en 450.',
        },
    ],
    '05-25': [
        {
            saint: 's. Gregorio VII, papa',
            info: 'Hildebrando de Sovana fue elegido Papa en 1073. Vivió una época dura para la Iglesia. Las tensiones con Enrique IV, que quería administrar los nombramientos episcopales, desembocan en la excomunión del monarca, quien va a Canossa a pedir perdón. Pablo V lo proclama Santo en 1606.',
        },
        {
            saint: 's. Beda Venerabile, sacerdote benedictino, doctor de la Iglesia',
            info: 'Monje e historiador inglés, San Beda el Venerable es un Doctor de la Iglesia por el amplio conocimiento de la Sagrada Escritura, por las enseñanzas que transmitió y por los numerosos escritos que dejó. Ha dedicado toda su vida al estudio y a la oración.',
        },
        {
            saint: 's. María Magdalena de’ Pazzi, virgen',
            info: 'Santa María Magdalena de Pazzi (bautizada como Catarina), virgen de la Orden de las Carmelitas, vivió en Florencia en el siglo XVI, en pleno Renacimiento. Con gran abnegación y ocultamiento se dedicó a orar por la reforma de la Iglesia, aún en medio de la agitación posterior al Concilio de Trento.',
        },
    ],
    '05-26': [
        {
            saint: 's. Felipe Neri, sacerdote, fundador de la Congregación de los Sacerdotes del Oratorio',
            info: 'Pedro, Pablo y Felipe: desde hace 500 años, los “Apóstoles de Roma” son tres. Esto dice mucho sobre el amor de la ciudad por un hombre nacido en Florencia pero renacido en las plazas de la Ciudad Eterna, en los callejones más degradados, donde un pastor santo puede tener el olor de las ovejas.',
        },
        {
            saint: 's. Eleuterio, papa',
            info: 'Originario de Epiro, Eleuterio fue Papa de 175 a 189. Tolerante con la herejía del montanismo, luchó contra el gnosticismo y el marcionismo, contra los cuales emitió un decreto solemne. A él se debe la celebración de la Pascua el domingo. Está enterrado en el Vaticano, junto a San Pedro.',
        },
        {
            saint: 's. Simetrio, mártir en la via Salaria nueva',
            info: 'Simetrio, o Simitrius, es un presbítero romano sepultado en el cementerio de Priscila sobre la Via Salaria Nueva, con otros 22 compañeros, con los que probablemente fue martirizado en los últimos años del imperio de Antonino Pio, quizás alrededor del 159.',
        },
    ],
    '05-27': [
        {
            saint: 's. Agustín, arzobispo de Canterbury',
            info: 'San Agustín, el santo y sabio abad benedictino que justamente fue llamado el Apóstol de Inglaterra, reevangelizò la Isla que sufrìa por la degeneración de las costumbres y por la invasión de los bárbaros. Murió en 604 y su tumba en Canterbury se convirtió inmediatamente en un lugar de peregrinación.',
        },
    ],
    '05-28': [
        {
            saint: 's. Germán, obispo de Paris',
            info: 'Nacido en Atún a finales del siglo V, Germán hizo sus votos y se le confió el monasterio de San Sifroniano, que recuperó de la decadencia. Consejero del rey en París, se convirtió en obispo de la ciudad: su monasterio fue señalado como modelo en toda Francia y fue dedicado a él a su muerte.',
        },
    ],
    '05-29': [
        {
            saint: 'S. Pablo VI, Papa',
            info: 'Pablo VI, pontífice del 1963 al 1978, fue un papa innovador que concluyó el Concilio Vaticano II. Fue también un defensor de la vida y de los pueblos oprimidos y un gran reformador de la Iglesia. Inició los viajes papales a los cinco continentes. Hizo nueve. Fue canonizado por Francisco en 2018.',
        },
        {
            saint: 's. Ursula Ledóchowska, fundadora de las Ursolinas del s. Corazón de Jesús agonizante',
            info: 'De origen austriaco, Ursula es hermana de la Beata María Teresa. En Cracovia se hace ursulina y viajó por Rusia, Suecia y Finlandia educando a mujeres jóvenes, hasta que en 1920 fundó su congregación dedicada al cuidado de los pobres, los ancianos y los enfermos. Juan Pablo II la canonizó en 2003.',
        },
    ],
    '05-30': [
        {
            saint: 's. Juana de Arco, virgen',
            info: 'La chica que devolvió el honor a la corona de Francia y murió falsamente acusada de herejía. Es la famosa y dramática parábola de Juana de Arco. La Santa, quemada en la hoguera en 1431, condujo al ejército a la liberación de Orléans por los británicos, impulsada por una imperiosa misión divina.',
        },
        {
            saint: 's. Fernando, rey de Castilla',
            info: 'Unificó los reinos de Castilla y León y en 1217 subiò al trono real. Se le denominó "el Conquistador de Andalucía" por haber eliminado el dominio sarraceno de Sevilla y Córdoba. Construyó la Catedral de Burgos y amplió la Universidad de Salamanca. Fue canonizado por Clemente X en 1671.',
        },
        {
            saint: 'S. Dymphna',
            info: 'Santa Dinfna, recordada el 30 de mayo en el "Martirologio Romano", es la patrona de las personas que sufren disturbios mentales y neurológicos y también de las mujeres víctimas de incesto y de violencia. Su devoción se ha extendido en los Centros médicos especializados en curar estas patologías.',
        },
        {
            saint: 'S. Petronila',
            info: 'Según la Passio de los Santos Nereo y Aquileo, sería hija del Apóstol Pedro. Las fuentes no concuerdan sobre ello, pero sí es cierto que fue sepultada en el cementerio de Domitila. Las noticias sobre su martirio se remontan al siglo IV. Sus restos se encuentran en San Pedro desde el año 757.',
        },
    ],
    '05-31': [
        {
            saint: 'S. Félix de Nicosia',
            info: 'Analfabeta pero “doctor” en humildad. Félix de Nicosia es un fraile capuchino de la primera mitad del ‘700. En el convento es portero, zapatero, enfermero. Fuera, enseña catecismo a los niños, y para todos tiene una buena palabra. Fallece en 1787, y es canonizado en 2005 por el Papa Benedicto XVI.',
        },
    ],
    '06-01': [
        {
            saint: 's. Justino, filósofo y mártir',
            info: 'El razonamiento humano para comprender lo divino: han sido muchos los santos que emprendieron esta senda para profundizar en la existencia de Dios. Entre los primeros, que se cimentaron en este desafío, está San Justino, que murió mártir el año 165 y que se celebra el 1 de junio de cada año.',
        },
    ],
    '06-02': [
        {
            saint: 'ss. Marcelino, sacerdote, y Pedro, exorcista, mártires, sobre la via Labicana',
            info: 'Marcelino y Pedro son dos de los innumerables Santos que testimoniaron el Evangelio como héroes y defendieron la Iglesia naciente, porque torturas y muerte no los llevaron a dar la espalda a Cristo. Su vivencia se desarrolla entre finales del siglo III y comienzos del IV.',
        },
        {
            saint: 's. Eugenio I, papa',
            info: 'Sucesor del Papa Martín I, que fue martirizado por orden del Emperador de Oriente Constantino, Eugenio I, Papa de 654 a 657, rechazó con firmeza la ambigua profesión de fe del nuevo patriarca bizantino de Constantinopla, Pedro. A su muerte fue sepultado en San Pedro.',
        },
    ],
    '06-03': [
        {
            saint: 'ss. Carlos Lwanga y Compañeros, mártires de Uganda',
            info: 'Entre los mártires católicos y anglicanos más famosos de Uganda, están San Carlos Lwanga y sus compañeros. Murieron "en odio a la fe", como víctimas de la persecución anticristiana de finales del siglo XIX. La Iglesia los recuerda el día en que fueron quemados vivos en la colina de Namugongo.',
        },
        {
            saint: 's. Cleotilde, reina de los Francos',
            info: 'Nacida en Lyon en 474, se casó con Clodoveo, rey de los francos. El soberano era pagano, pero le permitió bautizar a sus cinco hijos, que pelearán por la sucesión a su muerte. Clotilde se retiró a Tour, la ciudad de San Martín, donde trabajó con denuedo en obras de caridad y oración por sus hijos.',
        },
    ],
    '06-04': [
        {
            saint: 's. Francisco Caracciolo, sacerdote, fundador de los Clérigos Regulares Menores',
            info: 'Ascanio nació en una de las familias más prominentes del sur de Italia, los Caracciolo. Cuando será aprobado su nuevo Instituto, cambiará el nombre por Francisco, en honor al Santo de Asís. Devoto de María y enamorado de la Eucaristía, trabajó en la difusión de la Adoración hasta su muerte en 1608.',
        },
        {
            saint: 's. Quirino, mártir: su cuerpo reposa en S. Sebastián',
            info: 'Poco se sabe de Quirino, llamado "de Tívoli" porque sus restos reposaban en la Basílica de San Lorenzo. Se supone que fue el obispo de Siscia, en Croacia: encarcelado en el año 309 durante las persecuciones de Diocleciano, quien habría logrado convertir al carcelero antes de ser martirizado.',
        },
    ],
    '06-05': [
        {
            saint: 's. Bonifacio, obispo y mártir, apóstol de Alemania',
            info: 'Apóstol de Alemania, en el siglo VII san Bonifacio evangeliza las poblaciones más allá del Rin. Su trabajo sentó las bases de la organización política y social europea de Carlomagno. El Papa San Gregorio II apoya su celo misionero y lo consagra obispo de Maguncia. Es santo desde 1828.',
        },
    ],
    '06-06': [
        {
            saint: 's. Norberto, obispo de Magdeburgo, fundador de los Canónigos Regulares Premostratenses',
            info: 'Convertido después de ser alcanzado por un rayo, Norbert se hizo monje benedictino dedicado a la predicación y a la pacificación. Siempre en viajes  misioneros, en Prémontré fundó una nueva orden de Clérigos Regulares llamados Premostrasenses. Nombrado arzobispo de Magdeburgo, murió en 1134.',
        },
        {
            saint: 'ss. Artemio y Paolina, mártires en la via Aurelia',
            info: 'Artemio, el carcelero cristiano de Pedro y Marcelino, tiene una hija poseída, Paulina. Los dos prometen liberarla del diablo si él se convierte. Después del milagro, Artemio decide convertirse en cristiano con su esposa Cándida y su hija. Luego serán martirizados en la Via Aurelia.',
        },
        {
            saint: 's. Claudio, abad y obispo',
            info: 'Es uno de los santos más ilustres de Francia, aunque se sabe muy poco de él. Claudio nació en Salins. Al inicio fue canónigo de la catedral de Besançon, la ciudad de la que será arzobispo. Algunos años más tarde se retirará al monasterio de Condat que governó como abad durante 55 años. Murió en 703.',
        },
    ],
    '06-07': [
        {
            saint: 's. Antonio María Gianelli, obispo de Bobbio, fundador de las Hijas de María',
            info: 'Antonio María fue párroco en Chiavari y en 1827 se unió a la Sociedad económica, una organización caritativa que confió a las Damas de la Caridad. Fue el primer paso hacia la fundación de las Hijas de María Santísima del Huerto. Per ello, fue nombrado Obispo de Bobbio. Fue canonizado por Pío XII.',
        },
    ],
    '06-08': [
        {
            saint: 's. Medardo, obispo de Noyon',
            info: 'Algunos de sus milagros ayudaron a ladrones que le estaban robando, y tal vez esta generosidad inspiró a Hugo para su Mons. Myriel de “Los miserables”. Vive en el siglo VI, es hijo de uno de los Francos conquistadores de Galia. Se convierte en obispo de la actual Saint-Quentin, muere en el 561.',
        },
    ],
    '06-09': [
        {
            saint: 's. Efrén, diácono y doctor de la Iglesia',
            info: 'Intelectual, poeta, cantante, hombre de acción y de caridad. Difícilmente cualidades tan diferentes conviven en una misma persona. Santo y Doctor de la Iglesia, Efrén elige el cristianismo contra la voluntad de su padre y se convierte en un distinguido cantante de la fe.',
        },
        {
            saint: 'b. Anna María Taigi, madre de familia',
            info: 'Esposa ejemplar y madre de siete hijos, terciaria de la Orden de la SantísimaTrinidad, Ana María Taigi permanece al cuidado de su marido a pesar de los malos tratos injustamente sufridos. No descuida las obras de caridad hacia los pobres y los enfermos. Originaria de Siena, murió en Roma en 1837.',
        },
        {
            saint: 'ss. Primo y Feliciano, mártires',
            info: 'Hermanos originarios de la Sabina, mártires de las persecuciones de Diocleciano y Maximiano. Durante el pontificado de Teodoro I, sus restos fueron trasladados a Roma en el año 645, desde la via Nomentana distante 15 millas, hasta el templo de San Esteban Protomártir, en el Monte Celio en Roma.',
        },
    ],
    '06-10': [
        {
            saint: 's. Landerico, obispo de Paris',
            info: 'Landerico fue el 28º obispo de París. Se dedicó con grande celo apostòlico a ayudar a los pobres en el territorio de Neustria, incluso vendiendo los ornamentos sagrados para alimentarlos. Construyó un hospital junto a la catedral, dedicado al cuidado de las personas pobres. Murió alrededor del 657.',
        },
    ],
    '06-11': [
        {
            saint: 's. Paola Frassinetti, virgen, fundadora de las Hermanas de S. Dorotea',
            info: 'De Génova, a los 9 años es huérfana y cuida de su padre y hermanos. Mangas enrolladas, se convierte en colaboradora del hermano sacerdote. Funda una comunidad de monjas educadoras, y en Roma recibe ayuda de los Papas. Funda las Hermanas de Santa Dorotea. Juan Pablo II la proclama Santa en 1984.',
        },
        {
            saint: 's. Barnabás, apóstol',
            info: 'Bernabé era un hombre bueno, lleno de Espíritu Santo y de fe, (Hch 11,24). No era de los Doce pero fue llamado y venerado como Apóstol pues inició el anuncio de la Buena Nueva a todos los pueblos, (Hch 11,22). Fue él quien exhortó a Pablo a la misión, (Hch 11,25-26). Murió como mártir en Salamina.',
        },
        {
            saint: 's. Restituto, mártir en la via Nomentana',
            info: 'Fue arrestado en Roma durante las persecuciones de Diocleciano por predicar contra los dioses paganos. Por negarse a ofrecerles sacrificios, fue azotado hasta la muerte por orden de la corte de Hermógenes. Fue seputado en la 16ª milla de la Via Nomentana.',
        },
        {
            saint: 's. Juan de s. Facondo, sacerdote agostiniano',
            info: 'De noble origen, Juan será llamado "de San Facundo" porque ese fue el lugar de su nacimiento, en Asturias. Despojado de todas sus riquezas, se convirtió en un ermitaño agustino y terminó sus días en Salamanca en 1479, cuidando con esmero a los pobres y contemplando a Jesús en la Eucaristía.',
        },
    ],
    '06-12': [
        {
            saint: 's. León III, papa',
            info: 'Papa de 795 a 816, León III combatió la herejía que veía a Jesús hombre sólo como un hijo adoptivo de Dios; también buscó aclarar la cuestión "Filioque" del Credo. El 25 de diciembre de 800, coronó a Carlomagno Emperador del Sacro Imperio Romano Germánico en la antigua Basílica de San Pedro.',
        },
        {
            saint: 's. Onofrio, anacoreta',
            info: 'Lo poco que se sabe de su vida nos fue referido por Pafnuzio, un monje del siglo V. Onofrio era monje en Ermópolis pero luego prefirió la soledad del desierto como Juan el Bautista y Elías, pues era un estado de vida que se pensaba fuera "el más perfecto". Vivió como anacoreta más de 70 años.',
        },
    ],
    '06-13': [
        {
            saint: 's. Antonio de Padua, sacerdote franciscano y doctor de la Iglesia',
            info: 'Predicador y confesor incansable, San Antonio conjuga la vida apostólica y periodos de retiro en soledad, como amor hacia el prójimo y hacia Dios. Su memoria se celebra el 13 de junio. Suele ser representado con un lirio en la mano y en los brazos, el Niño Jesús.',
        },
    ],
    '06-14': [
        {
            saint: 's. Eliseo, profeta',
            info: 'El profeta Eliseo era un rico pastor-agricultor de Abel-meholah, el sucesor de Elías. (1 Re 19,16). Fue el más taumatúrgico de los profetas del Antiguo Testamento. No dejó nada escrito, aunque anunció la salvación universal de todos los hombres. Murió en el 790 a.C. y fue sepultado en Samaria.',
        },
    ],
    '06-15': [
        {
            saint: 's. Vito, mártir en Lucania',
            info: 'El único dato histórico es el martirio en Lucania, pero su culto está atestiguado desde el medioevo. Quizás siciliano, es conocido por los prodigios de sanación. Se invoca contra la epilepsia y la corea, una enfermedad que causa movimientos incontrolables conocida como el “baile de san Vito”.',
        },
        {
            saint: 's. Bernardo de Mentone, canónigo regular de s. Agustín',
            info: 'Agustino, nacido en Aosta alrededor de 1020, Bernardo fundó un monasterio en Suiza en la cima de la montaña conocida hoy como el Gran San Bernardo, para dar asistencia de los peregrinos que pasaban por allí. También fue un gran predicador contra los abusos del clero y el descuido de los fieles.',
        },
        {
            saint: 's. Germana Cousin, virgen',
            info: 'Germana nació en Toulouse en 1570 con una malformación. Cuando su madre murió, su padre la rechazó. Debe apacentar las ovejas pero, apenas tiene la ocasiòn, se va orar en la iglesia. Se le acercan jóvenes que sufren y buscan, como ella, un consuelo en la Palabra divina. Pío IX la canonizó en 1867.',
        },
    ],
    '06-16': [
        {
            saint: 'ss. Quirico y Julita, mártires',
            info: 'Madre e hijo, Julita y Quirico sufrieron la persecución anticristiana de Diocleciano en el 305. Arrestados en Tarso, la actual Turquía, ella no quiso abjurar y se vio obligada a ver morir a su hijo, que se proclamó cristiano, aunque era solo un niño. Por eso, es uno de los mártires más jóvenes.',
        },
    ],
    '06-17': [
        {
            saint: 'ss. Biagio y Diógenes, mártires en la via Salaria antigua',
            info: 'Biagio o Blasto y Diógenes, son dos mártires de la antigüedad cuyos restos reposan en Roma en la Basílica de S. Praxedis. Ya venerados en la Edad Media, se sabe que Biagio fue un tribuno mártir en el 269 por ser cristiano; y de Diógenes se sabe de su martirio por un epígrafe del presbitero Marea.',
        },
    ],
    '06-18': [
        {
            saint: 's. Gregorio Barbarigo, obispo de Padova y cardenal',
            info: 'El socorro a las víctimas de la peste, la cercanía a los fieles, incluso a los más pobres y la formación a sacerdotes: son los fundamentos de la vida de Gregorio Barbarigo, profundamente inspirada por la de San Carlo Borromeo. El Santo fue un hombre muy estimado por los Papas de su tiempo.',
        },
        {
            saint: 'Ss. Marco y Marcelliano, mártires romanos',
            info: 'Posiblemente hermanos de carne, pero ciertamente hermanos en el martirio, Marcos y Marceliano fueron arrestados en el 304 por el prefecto Cromazio, quien les concedio un mes para abjurar de su fe. Al negarse, fueron martirizados y luego sepultados en el cementerio de Balbina en la Via Ardeatina.',
        },
        {
            saint: 's. Marina de Bitinia',
            info: 'Es una de las historias más singulares de la Iglesia antigua. Marina de Bitinia se convierte en santa alrededor del siglo VIII, tras una vida breve e intensa en un monasterio, donde entró con su padre. Falsamente acusada, reconquista con tenacidad de fe y caridad la dignidad perdida.',
        },
    ],
    '06-19': [
        {
            saint: 's. Romualdo, abad, fundador de los Camaldolenses',
            info: 'Originario de Ravena, Romualdo, al inicio era monje y luego se conviritó en ermitaño. Viajó por Italia fundando varios monasterios. El más conocido es el de Camaldoli, en Casentino, donde los monjes viven según la regla benedictina ligeramente modificada, que todavía es muy importante hoy en día.',
        },
        {
            saint: 's. Juliana Falconieri, virgen, fundadora de las Mantellates',
            info: 'En la Florencia dividida en Güelfos y Gibelinos, Juliana Falconieri es una chica de la rica burguesía que decide servir a los pobres y rezar por la paz de su ciudad. Funda las Siervas de María, más conocidas como "Manteladas". Una enfermedad le impide comer, pero la última comunión es milagrosa.',
        },
        {
            saint: 'ss. Gervasio y Protasio, mártires milanenses',
            info: 'Poco o nada se sabe de las vidas de estos dos mártires cristianos asesinados entre los siglos III y IV. Es cierto que San Ambrosio encontró sus restos en 386, durante la construcción de la nueva basílica que ahora lleva su nombre, donde descansan en la cripta, junto a la tumba del obispo.',
        },
    ],
    '06-20': [
        {
            saint: 'S. Silverio, Papa y mártir',
            info: 'Silverio, nacido en Frosinone y elegido en 536, duró solo año y medio como Papa. Se involucró en la guerra entre Bizantinos y Godos por el dominio de la península Itálica y luchó duramente contra la herejía monofisita. Por orden de la emperatriz Teodora fue exiliado a la isla de Ponza, donde murió.',
        },
    ],
    '06-21': [
        {
            saint: 's. Luis Gonzaga, jesuita, patrón de la juventud católica',
            info: 'Noble heredero de un ilustre marqués, Luis comprendió muy pronto que el Señor lo quería en otra parte. Renunció a la riqueza y a la mundanidad en favor de la oración, la penitencia y el servicio, según el carisma de los jesuitas. Murió como un "mártir de la caridad" durante la peste de Roma en 1591.',
        },
    ],
    '06-22': [
        {
            saint: 'b. Inocencio V, papa',
            info: 'Pedro di Tarentaise nació en Saboya y se hizo dominicano. Un predicador tan grande y tan culto que fue llamado "doctor famosísimo". Como Arzobispo de Lyon trabajó para la unión de las Iglesias separadas de Roma. Fue elegido Papa con el nombre de Inocencio V en 1276, pero murió después de unos meses.',
        },
        {
            saint: 's. Paulino, obispo de Nola',
            info: 'No es común recibir la fe de dos “gigantes”. Detrás de la adhesión al Evangelio de San Paulino, patricio romano, están San Ambrosio y San Agustín. En Nola construye un Santuario y obras para los más pobres. Electo obispo de la ciudad muere en el 431, un año después su amigo Agustín.',
        },
        {
            saint: 'S. Juan Fisher, obispo de Rochester, mártir ingles',
            info: 'Teólogo y más tarde obispo de Rochester, Juan Fisher combatió la Reforma  Luterana junto al rey de Inglaterra, Enrique VIII. Pero luego se negó a reconocer su divorcio y su superioridad sobre el Papa. Por eso fue encarcelado en la Torre de Londres, junto a Tomás Moro. Fue condenado a muerte en 1535.',
        },
        {
            saint: 's. Flavio Clemente, cónsul romano, mártir',
            info: 'Flavio Clemente pertenecía a la familia Flavia, originaria de Rieti y era sobrino del emperador Vespasiano. Llegó a ser cónsul en el año 95. Casado con Flavia Domitila, se convirtió al cristianismo y sufrió la persecución de Domiciano, quien lo condenó a muerte bajo una falsa acusación de ateísmo.',
        },
        {
            saint: 'S. Tomás Moro, mártir ingles',
            info: 'Tomás Moro fue un firme defensor de la objeción de conciencia frente a los abusos del poder político. Fue decapitado en 1535 por su desacuerdo con Enrique VIII, como Jefe Supremo de la Iglesia de Inglaterra. Canonizado en 1935, fue proclamado patrono de los gobernantes y políticos por Juan Pablo II.',
        },
    ],
    '06-23': [
        {
            saint: 'S. José Cafasso, sacerdote torinense',
            info: 'Formador "de santos sacerdotes", San José Cafasso, que vivió en Turín a principios del siglo XIX, siempre llevaba el último gesto de misericordia a los prisioneros, especialmente a los condenados a muerte, de los cuales es el protector. Fue también el padre espiritual de Don Bosco.',
        },
        {
            saint: 'ss. Zacarías e Isabel, padres de s. Juan Bautista',
            info: 'Zacarías era descendiente de la casta sacerdotal mientras que Isabel era pariente lejana de María de Nazareth. Una pareja de ancianos justos que, de repente, reciben la gracia de esperar un hijo: Juan Bautista. Se celebra su memoria el día anterior a la de su hijo, el profeta precursor del Mesías.',
        },
    ],
    '06-24': [
        {
            saint: 'Natividad de Santo Juan Bautista',
            info: 'Cristo lo definió “el más grande de los nacidos de mujer”. San Juan Bautista, el precursor de Jesús, es uno de los santos más venerados en el mundo y es el único del que la Iglesia celebra el día de su nacimiento terrenal, el 24 de junio, además del de su martirio, el 29 de agosto.',
        },
        {
            saint: 'ss. Juan y Festo, mártires en la via Salaria',
            info: 'Pocas son las noticias sobre la vida de estos dos mártires romanos, recordados juntos probablemente en el día de su muerte. Según algunas fuentes, Juan era un presbítero decapitado en la época de Juliano el Apóstata. Ambos reposan en un cementerio a lo largo de la Via Salaria antigua.',
        },
    ],
    '06-25': [
        {
            saint: 'S. Guillermo, abad, fundador de los Monjes de Montevirgen',
            info: 'Peregrino, ermitaño, abad. La historia de Guillermo Vercelli es dinámica y variada. Santo nacido en 1085, se hizo popular en Irpinia, donde se estableció después de realizar largos viajes, fundando la Abadía de Montevergine y la anexa congregación de monjes. Murió en 1142.',
        },
        {
            saint: 's. Próspero de Aquitania, filósofo',
            info: 'Próspero nació en Aquitania; en Marsella se convirtió en monje laico y teólogo. Conoció personalmente a San Agustín y pasó su vida combatiendo la herejía de Pelagio sobre la predestinación. Igualmente defendió con vigor la doctrina de la universal voluntad salvífica de Dios. Murió alrededor del 455.',
        },
    ],
    '06-26': [
        {
            saint: 'ss. Juan y Pablo, mártires',
            info: 'Vivieron en el siglo V, hermanos de sangre y de fe, Juan y Pablo fueron martirizados probablemente en el 362, bajo el emperador Juliano el Apóstata.\nLos dos habrían sido asesinados en secreto y sepultados en su casa de Roma, que se encuentra bajo la basílica llamada hoy Celimontana.',
        },
        {
            saint: 's. Jose María Escrivá de Balaguer, sacerdote, fundador del Opus Dei',
            info: 'Una obra que permitiera alcanzar la santidad a cualquier persona. Este fue el ideal que iluminó al joven Josemaría Escrivá de Balaguer, el fundador del Opus Dei. La suya es la historia de un sacerdote "enamorado de Dios" que solía decir: "De cien almas, nos interesan cien".',
        },
    ],
    '06-27': [
        {
            saint: 's. Cirilo de Alejandría, obispo y doctor de la Iglesia',
            info: 'En una catequesis del 2007 sobre la figura de San Cirilo de Alejandría, Benedicto XVI lo llamó un "incansable y firme testigo de Jesucristo, \'Verbo de Dios encarnado\'". Padre de la iglesia, venerado como un santo en Oriente y en Occidente, fue proclamado Doctor de la Iglesia por León XIII en 1882.',
        },
        {
            saint: 'Beata María Mastena',
            info: 'Nacida en Verona, a los 20 años, María se hace religiosa de las Hermanas de la Misericordia donde enseñó. Después de siete meses de retiro en un claustro cisterciense, en 1932 sintió la inspiracion de fundar las Religiosas de la Santa Faz, para "hacer sonreír" el rostro de Cristo entre los hombres.',
        },
    ],
    '06-28': [
        {
            saint: 'S. Ireneo, obispo de Lyon y mártir',
            info: 'San Ireneo es el primer gran teólogo de la Iglesia. Su nombre, que en griego significa "pacífico", coincide con un programa de vida. Obispo de Lyon, gran defensor del Evangelio ante herejías, fue un "buen pastor" hasta su muerte, que probablemente fue en el 202.',
        },
        {
            saint: 's. Pablo I, papa',
            info: 'Pablo, caso único en la Iglesia, es el primer Papa en suceder a un hermano, también Papa. Acaece en el siglo VIII, después de la muerte de Esteban II. Hombre amable, gobierna la Iglesia en tierras acosadas por los lombardos. Salva de los saqueos muchas reliquias cristianas.',
        },
    ],
    '06-29': [
        {
            saint: 'S. Pedro, apóstol patrón de la ciudad de Roma',
            info: 'Es el primero entre los discípulos en profesar la fe en Cristo. Testigo de la predicación, muerte y resurrección de Jesús, San Pedro fue llamado a reunir la comunidad apostólica y a guiarla.  Primer obispo de  Roma, su martirio se recuerda el 29 de junio junto al de San Pablo.',
        },
        {
            saint: 'S. Pablo, apóstol patrón de la ciudad de Roma',
            info: 'Es el apóstol de los gentiles, el más grande misionero de la historia. San Pablo, fariseo convertido a Cristo, se consagra sin reservas al anuncio de la encarnación, muerte y resurrección de Jesús. Es el primer teólogo cristiano. Su martirio es recordado el 29 de junio junto al de San Pedro.',
        },
    ],
    '06-30': [
        {
            saint: 'ss. Protomártires de la Iglesia Romana',
            info: 'Justo después de la memoria de los ss. Pedro y Pablo se recuerdan a los primeros mártires de la Iglesia de Roma, falsamente acusados por Nerón de haber incendiado la ciudad el 19 de julio del 64 y por lo tanto condenados a muerte después de muchas torturas. La persecución continuará hasta el año 67.',
        },
    ],
    '07-01': [
        {
            saint: 'S. Aarón, hermano de Moisés, sumo sacerdote del Antiguo Testamento',
            info: 'Primer sacerdote del judaísmo, Aarón está junto a su hermano Moisés desde la liberación de Egipto. Cuando Moisés está en el Sinaí cede a la petición del pueblo de tener un ídolo. Dios lo perdona, pero sucesivas dudas le niegan el ingreso en Canaán, la Tierra Prometida.',
        },
        {
            saint: 'ss. Julio y Aarón, mártires de Bretaña',
            info: 'Parece que Julio y Aarón fueron asesinados porque eran cristianos durante las persecuciones de Diocleciano en el 304. En Caerlon, fortaleza romana ocupada por la Legión II de Augusta del 75 al 431 en Bretaña, estos dos mártires son hoy especialmente venerados.',
        },
    ],
    '07-02': [
        {
            saint: 'ss. Proceso y Martiniano, mártires romanos',
            info: 'Venerados en el día de dies natalis, Proceso y Martiniano son los custodios de los apóstoles Pedro y Pablo durante su encarcelamiento en la prisión de Mamertino y convertidos por ellos. Están sepultados en el cementerio de Damasco, en la segunda milla de la Vía Aurelia en Roma.',
        },
    ],
    '07-03': [
        {
            saint: 'S. León II, papa',
            info: 'San León es elegido Papa en el año 682. Sube al solio 18 meses después, porque en esa época el “sí” al nombramiento lo daba el Emperador de Oriente. Combate las herejías sobre la naturaleza de Cristo y reconduce la Iglesia de Ravena, tentada por un cisma, a la unidad. Está sepultado en San Pedro.',
        },
        {
            saint: 's. Tomás, apóstol',
            info: 'Apóstol de Jesús que ha pasado a la historia por no haber creído inmediatamente en la Resurrección, la fe de Tomás es realmente firme y fuerte. De hecho, le tocó a él ir hasta China y la India para evangelizar; fue en la India donde murió, después de haber fundado la primera comunidad de cristianos.',
        },
        {
            saint: 'San Eutiquio, mártir',
            info: 'En el siglo IV, Eutiquio fue condenado al martirio por la prolongada privación de comida y sueño, y finalmente fue arrojado a un barranco. Lo que sabemos de él está escrito en el epitafio que el Papa Dámaso colocó en su tumba en el cementerio de San Sebastián, en la Vía Appia de Roma.',
        },
    ],
    '07-04': [
        {
            saint: 's. Isabel de Portugal',
            info: 'Isabel, siendo reina, sigue su camino hacia la santidad cuidando de los pobres y poniendo paz entre las dinastías de Europa del 1300. Tras la muerte de su marido, Dionisio, peregrinó a Santiago de Compostela donde ofreció su corona, antes de encerrarse en el monasterio de las Clarisas de Coimbra.',
        },
        {
            saint: 's. Ulderico, obispo de Augsburg',
            info: 'Iniciado en la vida sacerdotal por su tío Adalberone, Obispo de Augsburgo tras cuya muerte al joven clérigo Ulderico se le ofreció su sucesión, pero se negó. Sin embargo dirigió el episcopado durante 50 años desde el 923, siendo un vigoroso defensor de su pueblo, del clero local y de la ciudad.',
        },
        {
            saint: 'B. Pier Giorgio Frassati',
            info: 'Piergiorgio, uno de los "Santos del Compromiso Social" del Piamonte, murió de poliomielitis fulminante el 4 de julio de 1925, a 24 años. San Juan Pablo II lo beatificó el 20 de mayo de 1990 por haber encarnado la caridad de Cristo en la vida cotidiana: lo llamó "el joven de las bienaventuranzas".',
        },
    ],
    '07-05': [
        {
            saint: 'S. Antonio María Zacarías, sacerdote, fundador de los Barnabitas',
            info: 'Durante los 36 años de su vida hizo dar a la Iglesia del 1500 un paso hacia adelante. Antonio María Zaccaria funda los Clérigos de San Pablo y las Angélicas de San Pablo – primer ejemplo de monjas fuera de la clausura – así como el grupo de laicos casados entregados al Evangelio.',
        },
    ],
    '07-06': [
        {
            saint: 's. María Goretti, virgen y mártir',
            info: 'A la pequeña María Goretti se le considera una mártir de la pureza, murió en el siglo XX defendiendo su castidad de un agresor que perdonó antes de morir. Al concluir su pena en la cárcel, se convirtió y reconcilió con la familia de la niña. Su fiesta es el 6 de julio.',
        },
        {
            saint: 'b. María Teresa Ledóchowska, fundadora de las Hermanas Misioneras de s. Pedro Claver',
            info: 'Nacida en Austria en el seno de una noble familia polaca, María Teresa aprendió desde pequeña a seguir el camino de la santidad. El encuentro con las Franciscanas misioneras de María y con el cardenal Lavigerie le mostró el camino hacia África, que sufría aun la esclavitud.',
        },
        {
            saint: 'B. Benito XI, papa',
            info: 'Niccolò Boccasini de Treviso se convirtió en Papa con el nombre de Benedicto XI en 1303. Se distinguió en la Orden Dominicana de Predicadores por haber obtenido la difícil tregua entre Francia e Inglaterra. Una vez Papa, se trasladó de Roma a Perugia para dedicarse completamente a la Iglesia.',
        },
    ],
    '07-07': [],
    '07-08': [
        {
            saint: 'ss. Aquila y Prisca (o Priscila), discípulos de s. Pablo',
            info: 'Amigos de Pablo, Aquila y Priscila, esposos y mártires, son recordados por el Apóstol de los gentiles que elogia el testimonio cristiano y el compromiso en la formación de los neófitos. Su hogar, "ecclesia doméstica", fue un punto de referencia para las comunidades de Corinto, Éfeso y Roma.',
        },
        {
            saint: 'b. Eugenio III, papa',
            info: 'Originario de Tvoli, durante 8 años Eugenio III defendió a la Iglesia de los turcos y fue responsable de la reforma de la Iglesia y de la Curia romana. Entró en la Orden cisterciense tras su encuentro con San Bernardo. Como Papa vivió la austeridad de la vida monástica hasta su muerte en 1153.',
        },
    ],
    '07-09': [
        {
            saint: 's. Adriano III, papa',
            info: 'Se sabe poco de la vida de Adriano III. Fue romano y gobernó la Iglesia sólo durante un año, del 884 al 885. Conocido por su actitud conciliadora con el Patriarca de Constantinopla, fue invitado por Carlomagno a la Dieta de Worms, pero murió durante el camino. Está sepultado en Nonantola.',
        },
        {
            saint: 'ss. Agustín Zhao Rong, sacerdote y Compañeros, mártires chinos',
            info: 'Murió en Sichuan en un día indeterminado de la primavera de 1815, Agustín fue el primer sacerdote chino del cual se atestigua su martirio. Por deseo de Juan Pablo II, fue venerado en un grupo de 120, mártires en China entre 1648 y 1930, y canonizado durante el Jubileo del 2000.',
        },
        {
            saint: 's. Verónica Juliani, abadesa, clarisa capuchina',
            info: 'Verónica, en el siglo Úrsula, vivió durante 50 años en el monasterio de las Clarisas de Città di Castello, del que fue abadesa. La gracia de Dios le concedió estigmas, visiones, éxtasis y carismas, por lo que fue llamada "la esposa del crucificado". Murió en 1727 y fue canonizada en 1839.',
        },
    ],
    '07-10': [
        {
            saint: 'Ss. Rufina y Segunda, mártires en la via Cornelia',
            info: 'Rufina y Segunda son dos jóvenes cristianas al igual que sus novios, que reniegan a Cristo por miedo a las persecuciones. Entonces ellas se consagran a la virginidad. Mientras los jóvenes, furiosos, las entregan a las autoridades y, en consecuencia, al martirio que se produce alrededor del año 260.',
        },
        {
            saint: 'ss. Anatolia y Victoria, mártires',
            info: 'El culto a las dos nobles romanas que se niegan a casarse por haberse consagrado a Dios se remonta a los siglos VI-VII. Los dos aspirantes entregaron sus posesiones en Sabina a Anatolia y Victoria, donde ambas mujeres fueron muy veneradas después de su martirio durante las persecuciones de Decio.',
        },
    ],
    '07-11': [
        {
            saint: 's. Benito, abad, patrón de Europa',
            info: 'Fundador de la orden benedictina, patrono de Europa: su vida se refleja fielmente en la “Regla”, cuyo espíritu se resume en el lema “Ora et Labora”. En estas palabras San Benito, cuya memoria es celebrada por la Iglesia el 11 de julio, indica a los monjes los pasos a seguir en su camino.',
        },
        {
            saint: 's. Pio I, papa',
            info: 'Originario de Aquilea, el Papa Pío I durante los 15 años de su pontificado tuvo que ver con la herejía del gnóstico Marción que contraponía el Dios del Antiguo Testamento a Cristo. Emitió normas para la conversión de los judíos y estableció el cálculo para la fecha de la Pascua. Murió en el 155.',
        },
    ],
    '07-12': [
        {
            saint: 's. Juan Gualberto, abad, fundador de los Vallombrosianos',
            info: 'Juan era monje en San Miniato. Tras acusar al abad de simonía, abandonó el monasterio y en 1038, junto con otros que también habían salido, y fundó uno en Vallombrosa. Aceptó, con reticencia, ser abad e imprimió en la comunidad el espíritu de la pobreza, del trabajo y del ejemplo de los Apóstoles.',
        },
        {
            saint: 'ss. Nabore y Felice, mártires milanenses',
            info: 'De origen norteafricano, Nabor y Félix llegaron a Milán en el siglo IV para servir como soldados en el ejército de Maximiano. Convertidos al cristianismo, fueron depurados de las filas militares y martirizados en Lodi. En 1799 sus restos fueron trasladados a la Basílica de San Ambrosio.',
        },
    ],
    '07-13': [
        {
            saint: 's. Enrique II, emperador',
            info: 'Emperador del Sacro Imperio Romano y último exponente de la dinastía de los Otones, Enrico II vive a caballo del año mil (973-1024). Dedica su vida a reforzar el destino de la Iglesia junto a aquel de su reino. Es considerado ejemplo de rectitud en el gobierno y es patrono de los monarcas.',
        },
        {
            saint: 'S. Esdras, escriba',
            info: 'San Esdras es el sacerdote del que se habla en la Biblia. Después del final de la esclavitud babilónica, el pueblo hebreo regresa a la nación, pero los años de cautiverio le debilitan la fe. Esdras se empeña con fuerza para volver compactos a los habitantes de la “nación sagrada” de la Alianza.',
        },
        {
            saint: 's. Silas, discípulo de los Apostoles',
            info: 'Silvano, llamado Silas, es mencionado en los Hechos de los Apóstoles como uno de los "hombres eminentes" de la Iglesia de Jerusalén. Predica en Antioquía como profeta, acompaña a San Pablo en sus viajes y ayuda a San Pedro a escribir sus encíclicas; muere, quizás como mártir, en Macedonia.',
        },
    ],
    '07-14': [
        {
            saint: 's. Camillo de Lellis, sacerdote, fundador de los Ministros de los Enfermos',
            info: 'San Camilo de Lelis ofrece un mensaje particularmente actual, porque estimula a vivir la primacía de la caridad. En la Encíclica “Deus caritas est”, el Papa Benedicto XVI lo considera entre los “modelos insignes de caridad social”, indicándolo como ejemplo para todos los hombres de buena voluntad.',
        },
    ],
    '07-15': [
        {
            saint: 's. Buenaventura de Bagnoregio, cardenal, obispo de Albano y doctor de la Iglesia, franciscano',
            info: 'Conocido como el “segundo fundador de la Orden” de los Hermanos Menores, San Buenaventura, distinguido teólogo y Doctor de la Iglesia, transforma la tradición franciscana en una escuela de pensamiento. Murió en 1274, durante el Concilio de Lyon y fue canonizado en 1482.',
        },
        {
            saint: 's. Pompilio M. Pirotti, escolapio',
            info: 'Domingo sintió la llamada del Señor a los 16 años. Tomó el nombre de Pompilio María y los votos como sacerdote a los que añadió el de los Escolapios, para instruir a los jóvenes pobres. Por su incansable trabajo con los chicos del centro de Italia. Es conocido como el "Apóstol de los Abruzos".',
        },
    ],
    '07-16': [
        {
            saint: 's. María Magdalena Postel, virgen, fundadora de las Hermanas de las Escuelas Cristianas de la Misericordia',
            info: 'Nacida en Normandía, Julia se dedica a la educación de las jóvenes y al catecismo de los niños. Después del oscuro período de la Revolución Francesa, abrió una escuela en Cherburgo y en 1806 emitió sus votos bajo el nombre de María Magdalena: nace la Congregación de las Hijas de la Misericordia.',
        },
    ],
    '07-17': [
        {
            saint: 's. Marcelina, virgen, hermana de s. Ambrosio, obispo',
            info: 'Hermana mayor de los santos Ambrosio y Sátiro, recibió el velo virginal del Papa el día de Navidad del 353. Cuando Ambrosio se convirtió en Obispo de Milán, se trasladó con él como su colaboradora. Vivió en comunidad con algunas compañeras, rezó y cuidó de los pobres hasta su muerte en el año 397.',
        },
        {
            saint: 'S. Alejo',
            info: 'Alejo, mendicante, es una figura sobre la que se centran varias leyendas. La más conocida relata que fue siervo en su casa de Roma durante años, sin ser reconocido por los suyos. El Papa Inocencio lo individua e informa a sus padres que llegan a verlo poco antes de que el futuro santo muriera.',
        },
        {
            saint: 's. León IV, papa',
            info: 'Pastor, diplomático, estratega. En sólo ocho años de arduo pontificado contrastó las invasiones de los sarracenos por mar y por tierra; reconstruyó las ciudades despuès de los incendios y los terremotos e intentó superar la laxitud del clero y los desacuerdos con el emperador. Murió en julio de 855.',
        },
    ],
    '07-18': [
        {
            saint: 'San Federico de Utrecht',
            info: 'Elegido Obispo de Utrecht entre 825 y 828, Federico luchó contra el paganismo y la costumbre de los matrimonios incestuosos. Evangelizador de Frisia, se lo recuerda como ejemplo de estudioso de las Sagradas Escrituras. Fue asesinado en un complot que nunca fue esclarecido en el año 838.',
        },
        {
            saint: 's. Emiliano, mártir de la Mesia',
            info: 'En la época del emperador Julián, el Apóstata, en el año 362, el vicario de la capital fue a Durostoro, en Mesia – actualmente Rumania – para restaurar el paganismo. El joven Emiliano, cristiano, volcó el altar y destruyó los ídolos para los sacrificios, por lo que fue condenado al martirio.',
        },
        {
            saint: 's. Bruno de Segni, obispo',
            info: 'Bruno fue nombrado Obispo de Segni por el Papa por haber derrotado la herejía de Berengario que negaba la presencia de Cristo en la Eucaristía. También luchó contra la simonía y el nicolaísmo, antes de poder retirarse a la vida monástica en la abadía de Montecassino. Murió en 1123.',
        },
    ],
    '07-19': [
        {
            saint: 'S. Símaco, papa',
            info: 'Las amenazas del rey ostrogodo Teodorico y la oposición del antipapa Lorenzo son los desafíos que San Símaco debe afrontar cuando es elegido Papa en el año 498. No se desanima y se ocupa también de liberar a los esclavos. Se le atribuye la construcción del primer palacio vaticano.',
        },
    ],
    '07-20': [
        {
            saint: 'S. Apolinar, obispo de Ravena y mártir',
            info: 'El primero en ejercer el ministerio episcopal en la ciudad imperial de Ravena por voluntad directa del apóstol Pedro, del que fue alumno, Apolinar lo administró durante casi 30 años, llevando a cabo una intensa labor de evangelización en la región que finalmente le valió el martirio.',
        },
        {
            saint: 's. Elías, profeta',
            info: '"El Señor es mi Dios": esto significa el nombre Elías. Profeta del siglo IX a.C., vive en Israel, consagrando su vida para despertar en el pueblo el reconocimiento del Señor como el único Dios, sin dejarse engañar por la idolatría. Enérgico e intransigente, desaparece alrededor del 805 a.C.',
        },
        {
            saint: 's. Aurelio, obispo de Cartago',
            info: 'En el 391 o 92 Aurelio es obispo en Cartago. La Iglesia local está desunida por crisis internas y por la división perpetrada por el intransigente obispo Donato. Aurelio revitaliza la Iglesia respaldando al futuro gran Santo, Agustín. En cada decisión busca la sintonía con Roma. Muere en el 430.',
        },
    ],
    '07-21': [
        {
            saint: 'S. Lorenzo de Brindis, sacerdote capuchino, doctor de la Iglesia',
            info: 'De Brindis a Europa. Lorenzo entra a formar parte de los Menores Capuchinos en 1575 cuando tenía 16 años, mientras a partir de los 30 la Orden le encomienda diversas responsabilidades, al igual que después Papas y príncipes. Muere en Lisboa en 1619. León XIII lo canoniza en 1881.',
        },
        {
            saint: 's. Praxedes, romana, en la Iglesia fundada por ella en la colina del Esquilino',
            info: 'Hermana de Santa Pudenciana, Práxedes es una rica romana. Su padre, convertido al cristianismo, transformó su casa en una iglesia. Ella solía administrar el bautismo y hacer celebrar la misa, pero bajo la persecución del emperador Antonio Pío murió mártir.',
        },
        {
            saint: 's. Ezequiel, profeta',
            info: 'El más firme de los cuatro grandes profetas de la historia de Israel, Ezequiel es venerado por la Iglesia como santo. Deportado desde el 597 con su pueblo a Babilonia, anima a los exiliados proclamando la Palabra de Dios. Su libro en el Antiguo Testamento está lleno de visiones y simbolismo.',
        },
    ],
    '07-22': [
        {
            saint: 'S. María Magdalena, discípula del Señor',
            info: 'María Magdalena, apóstola de los apóstoles, liberada del mal, fue la primera de las mujeres que seguían a Jesús en proclamarlo como Aquel que ha vencido la muerte. La fiesta de esta santa se celebra el 22 de julio.',
        },
    ],
    '07-23': [
        {
            saint: 's. Brigida, religiosa, Patrona de Europa',
            info: 'De la nobleza, esposa, madre de ocho hijos, fundadora de la Orden del Santísimo Salvador. Santa Brígida nació en 1303 en Finsta, Suecia. La suya será la vida de una mujer moderna, marcada por los viajes, las experiencias místicas y los mensajes al Papa para que vuelva a Roma desde Aviñón.',
        },
    ],
    '07-24': [
        {
            saint: 'S. Cristina, virgen y mártir',
            info: 'Como muchas mártires de los primeros siglos Cristina es una joven que por amistad con Cristo encuentra enemigos en su familia. Su padre la somete a crueldades para que abjure su fe, sin éxito. Lo mismo harán otros hasta que dos flechas se cobrarán su vida. Se la recuerda de modo especial en Bolsena.',
        },
        {
            saint: 's. Charbel Makhluˉf, sacerdote',
            info: 'Conocido como "el Padre Pío del Líbano", Chárbel Makhluf fue un monje maronita al que se le concedió permiso para vivir como ermitaño en 1875. Cerca de Dios, en silencio y en oración, se le atribuyeron muchos prodigios tras su muerte, especialmente curaciones milagrosas. Fue canonizado por Pablo VI.',
        },
    ],
    '07-25': [
        {
            saint: 's. Santiago el Mayor, apóstol',
            info: 'Discípulo de Jesús, protector de peregrinos y soldados, evangelizador de España. En la representación iconográfica es representado con el bastón del peregrino y el rótulo del Evangelio en la mano. Desde la edad media, multitud de peregrinos recorren el Camino de Santiago que conduce a su sepulcro.',
        },
        {
            saint: 's. Cristóbal, mártir',
            info: 'San Cristóbal  fue uno de los Santos mártires caídos durante la persecución de Decio. Su nombre posee un bello significado simbólico: portador de Cristo. Su fiesta se celebra el 25 de julio.',
        },
    ],
    '07-26': [
        {
            saint: 'ss. Joaquín y Ana, padres de la B. V. María',
            info: 'Los padres de María y los abuelos de Jesús, San Joaquín y Santa Ana son recordados juntos el 26 de julio dede 1969, después de la reforma litúrgica del Concilio Vaticano II. Aunque no se mencionan en las Sagradas Escrituras, sus nombres se conservan en una antigua tradición cristiana.',
        },
    ],
    '07-27': [
        {
            saint: 's. Pantaleón, médico, mártir',
            info: 'Nacido en Nicomedia de Bitinia, en la actual Turquía, educado cristianamente por su madre, una vez médico, Pantaleón comenzó a curar gratuitamente a los pobres, lo que no les gustó a las autoridades paganas. Denunciado al emperador, fue condenado a muerte y murió mártir en el año 305.',
        },
        {
            saint: 's. Celestino I, papa',
            info: 'Celestino I fue Papa desde el 422 hasta el 432. Durante su Pontificado hizo restaurar y construir muchas basílicas en Roma pero, sobre todo, se lo recuerda como un arduo defensor de la pureza de la fe contra las herejías de Pelagio y Nestorio, condenado públicamente en el Sínodo de Roma.',
        },
    ],
    '07-28': [
        {
            saint: 'b. Urbano II, papa',
            info: 'De origen francés, Urbano II es un viajero incansable. Defendió la Iglesia del ataque de los poderes seculares. Combatió contra la simonía y la corrupción del clero. Desde Francia inició la primera Cruzada para la liberación de Jerusalén que, sin embargo, no pudo ver porque murió en Roma en el 1099.',
        },
        {
            saint: 'ss. Nazario y Celso, mártires milanenses',
            info: 'Nazario fue un predicador discípulo de San Pedro. En Francia educó en la fe y bautizó al joven Celso a quien eligió como compañero de apostolado, dadas sus muchas virtudes. Ambos llegaron a Milán, donde fueron martirizados en año 304 bajo Diocleciano. San Ambrosio encontrará sus cuerpos.',
        },
        {
            saint: 's. Víctor I, papa',
            info: 'Papa africano durante diez años, Víctor I luchó contra diversas herejías, especialmente el adopcionismo, que ve a Jesús como un hombre adoptado por Dios. A él se debe la celebración de la Pascua el domingo siguiente al judío. Murió en el año 199, probablemente como mártir, bajo Septimio Severo.',
        },
    ],
    '07-29': [
        {
            saint: 's. Lázaro',
            info: 'San Lázaro es entre todos los Santos el único que murió dos veces. De hecho cuatro dias después de su fallecimiento, el Santo es resucitato por su amigo Jesús. Su memoria litúrgica se celebra el 29 de julio.',
        },
        {
            saint: 's. Marta, discípula del Señor',
            info: 'Santa Marta es recordada el 29 de julio. De su diligencia, se aprende a no dispersarse en un montón de actividades que descuidan el amor; de su profesión de fe se aprende que sólo abandonando las certezas humanas, la vida en Dios hace experimentar prodigios que no se creían posibles',
        },
        {
            saint: 's. Felicio, mártir en la via Portuense',
            info: 'Félix, o Felicio, fue uno de los primeros mártires cristianos de la historia, de cuya vida poco o nada se sabe. Se conoce solo con certeza el lugar de su sepultura en Roma, cerca de la tercera milla de la Via Portuense, en el cementerio que más tarde tomó el nombre de este Santo.',
        },
        {
            saint: 's. Beatriz',
            info: 'Beatriz o Viatriz, del latín “viator”, viajero, es una mártir romana. Murió durante las persecuciones de Diocleciano, entre los años 303 y 304. Se le festeja el 29 de julio junto a los santos Simplicio, Faustino y Rufo, mártires.',
        },
    ],
    '07-30': [
        {
            saint: 'S. Pedro Crisólogo, obispo de Ravena y doctor de la Iglesia',
            info: 'En Ravena, que desde los inicios del Siglo V es capital del Imperio romano de Occidente, el obispo Pedro es un hombre de paz. Los 180 sermones que llegaron hasta nuestros días hablan de su fe. Fascina a Papas y a reinantes con “palabras de oro”, de donde se desprende su apelativo “crisólogo”.',
        },
        {
            saint: 'ss. Abdón y Sennen, mártires',
            info: 'Originarios de Persia, quizás fueron. Abdón era mayor y Sennen más joven. Convertidos al cristianismo, se preocupaban en Roma de dar sepultura a los mártires en el siglo III, durante la persecución de Decio. Encarcelados, se negaron a hacer sacrificios a los ídolos por lo que murieron mártires.',
        },
    ],
    '07-31': [
        {
            saint: 'S. Íñigo López de Loyola, fundador de la Compañía de Jesús',
            info: 'San Ignacio de Loyola es uno de los santos de la reforma católica del siglo XVI. Fundador de la Compañía de Jesús, este santo es recordado como maestro de espiritualidad gracias a sus Ejercicios. Su fiesta se celebra el 31 de julio.',
        },
        {
            saint: 'S. Justino de Jacobis, de la Congregación de la Misión, obispo en Abisinia',
            info: 'Conocido como el "padre de la Iglesia de Etiopía", San Giustino de Jacobis se caracteriza por el "mandato misionero", la "preocupación por formar el clero indígena" y la "acción ecuménica", tal y como subrayó Pablo VI en su ceremonia de canonización en 1975.',
        },
    ],
    '08-01': [
        {
            saint: 's. Pedro Favre, sacerdote jesuita',
            info: 'El primero de agosto la Iglesia recuerda a San Pedro Fabro, contemporáneo de San Ignacio de Loyola. Primer sacerdote de la Compañía de Jesús, gran hombre de diálogo: enviado como emisario del Papa para tratar situaciones delicadas, en particular con los defensores de la Reforma de Lutero.',
        },
        {
            saint: 's. Alfonso María de Ligorio, obispo y doctor de la Iglesia, fundador de la Congregación del ss.mo Redentor',
            info: "El precoz abogado Alfonso, de noble familia napolitana, a los 30 años dejó su envidiable profesión y se convirtió en sacerdote. En 1732 fundó la Congregación del Santísimo Redentor y luego fue elegido obispo de Sant'Agata dei Goti. Canonizado en 1839, en 1871 Pío XI lo proclamó Doctor de la Iglesia.",
        },
        {
            saint: 'ss. siete Hermanos Macabeos',
            info: 'El martirio de los siete hermanos y de su madre ocurrió hacia el 168 a.C., a causa de su desobediencia al Rey Antíoco IV Epífanes, que les exigía ser infieles a la Alianza con Dios. (Cf 2 Macabeos,7). Su fe plena en la resurrección ha anticipado la fe en la vida eterna de los mártires cristianos.',
        },
    ],
    '08-02': [
        {
            saint: 's. Pedro Juliano Eymard, fundador de los Sacramentinos',
            info: 'San Pedro Julián Eymard, Apóstol de la Eucaristía, es recordado cada año por la Iglesia el 2 de agosto. Fundador de los sacramentinos e inspirador de los Congresos eucarísticos, este santo hizo del amor por Cristo, contemplado en el altar, el centro de su vida.',
        },
        {
            saint: 's. Eusebio, obispo de Vercelli',
            info: 'El primer obispo de Vercelli, Eusebio, nombrado en el 345, era originario de Cerdeña. El más grande defensor del Credo de Nicea atrajo la hostilidad de los arrianos, incluso del Emperador Constancio que lo exilió a Capadocia en 355. A su regreso a Vercelli 7 años después, reanudó la evangelización.',
        },
        {
            saint: 's. Stefano I, papa',
            info: 'Papa desde 254, fue muy caritativo con los cristianos que, a causa de la persecución, habían renegado de su fe en Jesús. Se opuso a la costumbre de rebautizar a los creyentes que regresaban a la fe después de las herejías. Según la tradición, murió como mártir en la persecución de Valeriano del 257.',
        },
    ],
    '08-03': [
        {
            saint: 's. Lidia, discípula de s. Pablo',
            info: 'Su habitación fue la primera iglesia en Europa fundada por San Pablo. Cuando el Apóstol llega a Filipos en Macedonia, encuentra hospitalidad en la casa de esta recién convertida al Evangelio junto con toda su familia. Su historia se encuentra en el capítulo 16 de los Hechos de los Apóstoles.',
        },
    ],
    '08-04': [
        {
            saint: 'S. Juan M. Vianney, cura de Ars, patrón del clero que cura las almas',
            info: 'Juan María Vianney, el Cura de Ars, vivió a mediados del siglo XIX. Ejemplo de gran celo sacerdotal, dedicó su ministerio a la salvación de las almas transcurriendo aún hasta 16 horas al día en el Sacramento de la Reconciliación y el Perdón. Benedicto XVI le dedicó el Año Sacerdotal 2009.',
        },
        {
            saint: 'ss. Justino y Crescencio, mártires en la via Tiburtina',
            info: 'Poco se sabe de estos dos clérigos romanos sepultados en una iglesia sobre la Via Tiburtina. Según algunas fuentes, Crescencio - o Crecención - era un lector; Justino se dedicó a las obras de caridad y a dar digna sepultura a los mártires cristianos. Por eso fue martirizado en la época de Claudio.',
        },
    ],
    '08-05': [
        {
            saint: 'San Osvaldo',
            info: 'En Maserfield (o Oswestry), Inglaterra, Osvaldo rey de Northumbria, fue un distinguido militar que buscó difundir la fe cristiana en la región no solo por medio de la paz sino también por la fuerza de la guerra. Murió en 642 en batalla contra el rey pagano Penda. Por eso fue venerado como mártir.',
        },
    ],
    '08-06': [
        {
            saint: 's. Ormisda, papa',
            info: 'Ormisda, originario de Frosinone, fue un diácono viudo con un hijo que también sería Papa. Fue elegido en 514 y se le recuerda sobre todo por la reconciliación entre las Iglesias de Roma y Constantinopla después del cisma de Acacia. La confesión de fe tomó el nombre de "Fórmula de Ormisda".',
        },
    ],
    '08-07': [
        {
            saint: 's. Cayetano de Thiene, sacerdote, fundador de los Teatinos',
            info: 'Pobres, incurables, quien tuviera una mano extendida era su amigo. Cayetano de Thiene es un noble vicentino que vivió entre los siglos XV y XVI, quien tras convertirse en sacerdote, en 1523 funda con tres compañeros (uno de los cuales será el Papa Pablo IV) la Congregación de los Teatinos.',
        },
        {
            saint: 'ss. Sixto II, papa, y Compañeros, mártires',
            info: 'Sixto II fue un gran constructor de paz que acogió a los herejes arrepentidos sin rebautizarlos. También revocó la excomunión a los que rebautizaban. Debido a las persecuciones anticristianas de Valeriano, a solo once meses de pontificado, murió en 258, junto a seis de los siete diáconos de Roma.',
        },
        {
            saint: 's. Donato, obispo de Arezzo',
            info: 'Originario de Nicomedia, Donato estudió en Roma y recibió solo el lectorado. Debido a las persecuciones, huyó a Arezzo y junto al monje Ilariano evangelizaron con la predicación, la penitencia, la oración y el apostolado. Llegó a ser el obispo de Arezzo y murió mártir bajo Julián el Apóstata en 362.',
        },
        {
            saint: 's. Alberto, sacerdote carmelita',
            info: 'Alberto nació en Trapani en el siglo XIII. Amante de la pureza y la oración, sobresalió en la predicación mendicante. Su gran fe y oración obtuvieron de Dios varias conversiones y milagros. Fue el Padre provincial en Sicilia hasta su muerte en 1307. Fue el primer santo de la Orden de los Carmelitas.',
        },
    ],
    '08-08': [
        {
            saint: 's. Domingo de Guzmán, sacerdote, fundador de la Orden de Predicadores',
            info: '“Humilde ministro de la predicación”, un gigante en realidad. Domingo de Guzmán es una de las figuras extraordinarias de la Iglesia del Medioevo. Afronta con ardor las herejías de su época, funda y difunde la Orden de los Hermanos Predicadores, vive con la fuerza y la gracia de un alter Christus.',
        },
        {
            saint: 'ss. Ciriaco, Largo y Smaragdo, mártires',
            info: 'Cuando confortaban a los prisioneros cristianos obligados a trabajos forzados en las Termas de Diocleciano, fueron descubiertos y encarcelados. Aún allí realizaron  exorcismos y conversiones y fueron decapitados por el Emperador Maximiano en 306. Sus restos fueron sepultados sobre la Via Ostiense.',
        },
    ],
    '08-09': [
        {
            saint: 's. Teresa Benedicta de la Cruz (Edith Stein), virgen y mártir carmelita, Patrona de Europa',
            info: 'Mártir por la fe, patrona de Europa desde 1998, santa Teresa Benedicta de la Cruz, entonces Edith Stein, la Iglesia le celebra su solemnidad el 9 de agosto. Filósofa judía, convertida al catolicismo, muere en las cámaras de gas en Auschwitz en 1942.',
        },
        {
            saint: 's. Romano, mártir  en la via Tiburtina',
            info: 'Un soldado movido por la piedad de un torturado. Comienza y termina en pocos instantes la historia de este mártir. Mientras asiste al suplicio de S. Lorenzo, aprovecha una tregua para acercarse a él con una jarra de agua pidiendo el Bautismo. Lo azotan. Grita “¡soy cristiano!” y por esto lo matan.',
        },
    ],
    '08-10': [
        {
            saint: 's. Lorenzo, diácono y mártir',
            info: 'Es el patrono de los diáconos, los cocineros y los bomberos. En el periodo de su fiesta, el cielo nocturno se enciende con estelas luminosas. Este fenómeno está unido a la caída de una gran cantidad de meteoritos. Para la tradición popular, estas luces son las lágrimas de San Lorenzo.',
        },
    ],
    '08-11': [
        {
            saint: 's. Clara de Asís, virgen, fundadora de las Clarisas',
            info: 'El 11 de agosto la Iglesia recuerda a Santa Clara de Asís, vírgen del siglo XIII, fundadora de las Clarisas. Cuando tenía 18 años, no obstante la objeción de la familia, siguió a Francisco abandonando las riquezas y dedicándose totalmente a la oración. Es la patrona de la televisión.',
        },
        {
            saint: 's. Tiburcio, mártir en la via Labicana',
            info: 'En los itinerarios del siglo VII se narra que Tiburcio fue uno de los primeros mártires cristianos. Su tumba se halla en el cementerio de Duas Lauros en la Vía Labicana de Roma. El Papa San Dámaso alabó su martirio. Parte de sus restos se conserva en el altar mayor de la iglesia de San Apolinar.',
        },
        {
            saint: 's. Susana, romana, en la Iglesia homónima',
            info: 'Se consagró a Cristo, rechazó casarse con el hijo adoptivo del emperador Diocleciano. Por tal motivo, Santa Susana fue condenada a muerte y decapitada en su casa, que después fue lugar de culto. Los restos podrían estar en la iglesia actual dedicada a ella en el centro de Roma.',
        },
    ],
    '08-12': [
        {
            saint: 's. Juana Francesca de Chantal, religiosa',
            info: 'Come Clara para Francisco, así fue Juana Francisca Frémyot para Francesco de Sales. Siendo baronesa de Chantal, cuando su amado esposo está ausente deja los vestidos elegantes y sirve a los pobres. Siendo viuda se consagra a Dios y funda la Orden de la Visitación para atender a los enfermos.',
        },
        {
            saint: 'b. Inocencio XI, papa',
            info: 'Benedicto Odescalchi, llegó a ser Inocencio XI en 1676: un reformador de las costumbres que luchó contra los abusos de poder, el nepotismo y la esclavitud. De los terribles resultados del segundo asedio a Viena, comprendió que la amenaza turca debía ser contrastada. Para ello formó la Liga Santa.',
        },
    ],
    '08-13': [
        {
            saint: 's. Juan Berchmans, jesuita',
            info: 'Hijo de un zapatero de Flandes del 1600, Juan tuvo que trabajar duro para mantener sus estudios y responder al llamado del Señor. En 1618 entró en la Compañía de Jesús y después de sólo un año fue elegido Maestro de novicios. Enviado a Roma a estudiar, murió cuando tenía sólo 22 años en 1621.',
        },
        {
            saint: 'ss. Ponciano, papa e Hipólito, sacerdote, mártires',
            info: 'Ponziano, Papa desde el 230, abdicó cuando fue exiliado a las minas de Cerdeña junto con el cismático Hipólito durante la persecución anticristiana de Maximino el tracio. Murieron de hambre y de sed en el 235. Fueron venerados como mártires en Roma. Sus restos yacen en San Calisto y en la Tiburtina.',
        },
        {
            saint: 's. Casiano, mártir',
            info: 'Un cristiano muy ejemplar que educó y transmitió la fe a los jóvenes, Casiano de Imola fue torturado y sufrió el martirio por haber rechazado sacrificar a los ídolos. Murió alrededor del año 305, durante la persecución de Diocleciano. Se dice que la catedral de Imola fue construída sobre su tumba.',
        },
        {
            saint: 'Santa Filomena',
            info: 'La figura de Santa Filomena está envuelta en el misterio; por eso fue excluida del Martirologio romano del 1961. A pesar de ello, se le tiene una gran devoción, especialmente en el Santuario campano de Mugnano del Cardinale (Italia) que conserva sus restos, venerados por peregrinos de todo el mundo.',
        },
        {
            saint: 'S. Máximo el Confesor',
            info: 'Abandonó una envidiable carrera civil para hacerse monje. Por defender la fe contra la herejía del monotelismo, este Padre de la Iglesia perdió la lengua y la mano derecha. Su fiesta se celebra el 13 de agosto.',
        },
    ],
    '08-14': [
        {
            saint: 's. Maximiliano M. Kolbe, sacerdote de la Orden de los Hermanos Menores Conventuales y mártir',
            info: 'Nacido en Polonia en 1894, se hizo franciscano. Fundó la Milicia de la Inmaculada. Tras la invasión nazi del país es internado en el campo de concentración de Auschwitz, donde muere en el búnker de la muerte tras ofrecerse a cambio de un padre de familia.',
        },
        {
            saint: 's. Eusebio, romano, fundador de la Iglesia homónima en la colina del Esquilino',
            info: 'Sacerdote romano en la época de Constancio II, Eusebio reprochó al Papa Liberio su exagerada laxitud ante el arrianismo del emperador. Constancio II lo encarceló por siete meses en un calabozo, donde murió el 14 de agosto del 353. Tiempo después le fue dedicada la homónima basílica en el Esquilino.',
        },
        {
            saint: 'S. Alfredo',
            info: 'Alfredo nació en una rica familia de Colonia en el siglo IX. De monje benedictino se hizo sacerdote y luego fue obispo de Hildesheim en 850. Como un buen pastor, se ocupó de la evangelización y de la construcción de nuevas iglesias y conventos. Fue un hombre de confianza de Ludovico el Germánico.',
        },
    ],
    '08-15': [
        {
            saint: 's. Tarcisio, romano, mártir de la Eucaristia',
            info: 'La Iglesia lo recuerda en el día de la solemnidad de la Asunción de la Bienaventurada Virgen María. San Tarsicio, patrono de los monaguillos, es un muchacho cristiano de los primeros tiempos que sacrifica la vida con tal de proteger las hostias consagradas que llevaba consigo por un acto de caridad.',
        },
        {
            saint: 's. Estanislao Kostka, jesuita',
            info: 'La importante familia polaca del jóven Estanislao lo mandó a estudiar al colegio jesuita de Viena. Allí sintió su vocación de hacerse jesuita. Su padre se opondrá pero él preferirá obedecer al Señor y se fugará a Roma. Murió como novicio a los 18 años en 1568; fue el primer jesuita beatificado.',
        },
    ],
    '08-16': [
        {
            saint: 's. Esteban, rey de Hungría',
            info: 'Esteban nace alrededor del 969 y en el 997 se convierte en Rey de Hungría. Bautizado a los dos años, organiza su reino permitiendo que la Iglesia se estructurara. Crea 10 diócesis, se ocupa de la fundación y consolidación de muchas abadías, inspirándose en la reforma de Cluny. Muere en 1038.',
        },
        {
            saint: 's. Roco, peregrino',
            info: 'Nacido en Montpellier, a los 20 años Roco se despojó de todas sus posesiones y salió de casa hacia Roma, en espíritu de conversión. En Acquapendente asistió a las víctimas de la peste y su oración obtuvo curaciones milagrosas. Fue acusado de ser un espía y murió en prisión en Voghera hacia el 1379.',
        },
    ],
    '08-17': [
        {
            saint: 's. Clara da Montefalco, abadesa agustina',
            info: '“La vida del alma es el amor de Dios” decía Santa Clara de Montefalco, que a los seis años se sumergió en este amor en el reclusorio dirigido por su hermana. Abadesa, se distingue por su sabiduría. Su espiritualidad está centrada en la Pasión de Cristo. Muere el 17 de agosto de 1308.',
        },
        {
            saint: 's. Eusebio, papa y mártir',
            info: 'Papa durante pocos meses, desde abril del 309, se dedica a los lapsi, los que han abjurado de su fe a causa de las persecuciones pero piden la readmisión. Los guía Heráclito, que era contrario a las puniciones reparadoras. El contraste es apaciguado con la sangre de Majencio, Eusebio es exiliado.',
        },
        {
            saint: 's. Jacinto de Cracovia, sacerdote dominico',
            info: 'Jacinto nació en Silesia en 1183, nieto del obispo de Cracovia. En Roma conoció a santo Domingo y entró en la Orden de Predicadores con la tarea de evangelizar Polonia y todo el Este. Trabajó por la unión de las Iglesias de Oriente y Occidente hasta Kiev. Fue canonizado en 1594.',
        },
    ],
    '08-18': [
        {
            saint: 's. Elena, emperatriz',
            info: 'Madre de Constantino, el emperador romano que dio libertad de culto a los cristianos con el Edicto de Milán en 313. Su profunda fe cristiana la condujo a ocuparse de las necesidades de los pobres. Construyó importantes basílicas y es recordada por el descubrimiento de la verdadera Cruz de Cristo.',
        },
        {
            saint: 's. Agapito, mártir de Palestrina',
            info: 'Miembro de la noble familia Anicia de Preneste, la antigua Palestrina, Agapito se convirtió al cristianismo a sólo 15 años de edad. Durante el intento de restaurar el paganismo en Roma por el emperador Aureliano, fue torturado y martirizado por haber confesado valientemente su fe en el año 274.',
        },
    ],
    '08-19': [
        {
            saint: 's. Juan Eudes, sacerdote, fundador de los Eudistas',
            info: 'Su gesto característico es la atención a los apestados. Corre el 1625 y Juan Eudes, normando, es un sacerdote que se dedica a la gente, especialmente si es pobre. Recorre la Francia embrutecida por la Guerra de los Treinta años. Funda la Congregación de Jesús y María, de quienes era muy devoto.',
        },
        {
            saint: 's. Sixto III, papa',
            info: 'Papa desde 432, Sixto III luchó contra las herejías pelagianas y nestorianas. También reconcilió los Patriarcados de Antioquía y Alejandría. Reforzó el dogma trinitario y donó la Basílica de Santa María la Mayor a la ciudad de Roma. Murió en el 440. Sus restos yacen en San Lorenzo fuori le Mura.',
        },
        {
            saint: 's. Magno, mártir en el Lazio',
            info: 'En el año 285, Magno fue uno de los soldados de la Legión Tebana, conducida por san Mauricio, que desobedeció la orden de Maximiano de ajusticiar a los cristianos de la zona del Valais, hoy Piamonte, donde evangelizaba. Perseguido por su fe cristiana, fue arrestado y murió como mártir en los Alpes.',
        },
    ],
    '08-20': [
        {
            saint: 's. Bernardo, abad y doctor de la Iglesia',
            info: 'Doctor de la Iglesia, fundador de la abadía de Clairvaux (Claraval), uno de los padres de los cistercienses: San Bernardo de Claraval, cuya memoria litúrgica se celebra el 20 de agosto, recorrió los caminos de Europa, combatiendo herejías y defendiendo al Papa y a la Iglesia.',
        },
        {
            saint: 's. Samuel, profeta',
            info: 'El primer libro de Samuel lo muestra como el primer profeta y último juez de Israel. Su madre era estéril pero oró intensamente para tener un hijo. Dios le concedió Samuel alrededor del 1070 aC. y ella lo consagró al Señor. Ungió como rey primero a Saúl y luego al David, de cuyo linaje nacerá Jesús.',
        },
        {
            saint: 's. María de Mattias, virgen, fundadora de las Hermanas Adoratrices de la Preciosísima Sangre',
            info: 'Cuando se encontró con san Gaspar del Búfalo en Vallecorsa, un pobre pueblo del Estado Pontificio, la vida de María cambió a los 17 años. Con su acción misionera evangelizó toda la Chiocharía a lomos de una mula. En 1834 fundó las Hermanas Adoratrices de la Sangre de Jesús, dedicadas a la educación.',
        },
    ],
    '08-21': [
        {
            saint: 's. Pio X, papa',
            info: 'Conocido por el Catecismo que lleva su nombre, el Papa Pío X, en el siglo Giuseppe Melchiorre Sarto, gobernó la Iglesia desde 1903 hasta 1914, año en que falleció, un mes antes del estallido de la Primera Guerra Mundial. Canonizado por Pío XII en 1954, en la Iglesia se lo recuerda el 21 de agosto.',
        },
    ],
    '08-22': [
        {
            saint: 's. Timoteo, mártir romano en la via Ostiense',
            info: 'Confundido con el homónimo y más conocido discípulo de S. Pablo, de Timoteo mártir en Roma en la vía Ostiense se tienen pocas pruebas históricas. Un relato tomado de los “Hechos de Silvestre Papa” lo describe como ferviente anunciador del Evangelio, a quien el prefecto Tarquinio mandó a matar.',
        },
        {
            saint: 's. Sinforiano, mártir de Autun',
            info: 'Hijo del noble Fausto, Sinforiano fue educado en la fe cristiana. Vivió en la ciudad de Autún, bajo la dominación de la Roma pagana. En una fiesta de Cibeles, en vez de rendir honor a la diosa de la Madre Tierra, prefirió confesar su fe en Cristo y por eso fue encarcelado. Murió como mártir en 257.',
        },
        {
            saint: 's. Felipe Benizi, sacerdote, de los Siervos de María',
            info: 'Felipe entró con las Siervos de María como laico y durante 5 años hizo los servicios mas humildes. Luego fue consagrado sacerdote y maestro de novicios. En 1267 fue Prior General y gran propagador de la Orden. Escribió su Constitución. Murió en Todi en 1285 y fue canonizado en 1671 por Clemente X.',
        },
    ],
    '08-23': [
        {
            saint: 's. Rosa da Lima, virgen, terciaria dominica',
            info: 'La primera Santa del Nuevo Mundo es Isabel Flores, Santa Rosa de Lima, venerada el 23 de agosto y patrona principal de América, de Filipinas y de las Indias Occidentales. En sus treinta años de vida se consagró totalmente al Crucificado por la salvación de los pecadores.',
        },
        {
            saint: 'ss. Abundio e Ireneo, mártires en la via Tiburtina',
            info: 'Se sabe poco de la vida de estos mártires. Acusados de haber dado honrosa sepultura al cuerpo de la mártir Concordia, fueron arrojados en una cloaca durante la persecución de Valeriano. Fueron sepultados en el cementerio de San Lorenzo en la Via Tiburtina y su culto ya era muy vivo en el siglo VII.',
        },
        {
            saint: 'ss. Ciriaco y Arquelao, mártires de Ostia',
            info: 'Mártires en Ostia, donde son capturados y asesinados por el vicario Ulpio Romolo enviado por Claudio, Ciriaco es un obispo y Arquelao un diácono que realizan prodigiosas conversiones y muchos bautismos entre los paganos. Se les recuerda también junto a san Máximo, mártir en Ostia y presbítero.',
        },
    ],
    '08-24': [
        {
            saint: 's. Bartolomeo, apóstol',
            info: 'Bartolomé o Natanael es uno de los doce apóstoles que acompañaron a Jesús desde su bautismo en el Jordán hasta su muerte y resurrección. Sabemos por los Evangelios que era un pescador de Caná, inicialmente escéptico. Las tradiciones añaden que evangelizó la India y que murió como mártir en Armenia.',
        },
        {
            saint: 's. Juana Antida Thouret, virgen, fundadora de las Hermanas de la Caridad',
            info: 'De familia pobre, huérfana desde muy pequeña, Francisca Juana ingresó primero al Instituto de las Hijas de la Caridad y luego, no sin grandes incomprensiones y sufrimientos, fundó el Instituto de las Hermanas de la Caridad. Murió en Nápoles en 1826; fue beatificada y canonizada por Pío XI en 1934.',
        },
        {
            saint: 'Santa Emilia de Vialar',
            info: 'Santa Emilia nace en 1797 en Gaillac, Francia, donde en 1832 fundó la Congregación de las Hermanas misioneras de San José de la Aparición, cuya labor consistía en contribuir a la realización del plan de salvación de Dios para la humanidad.',
        },
    ],
    '08-25': [
        {
            saint: 's. Ludovico (Luis IX), rey de Francia',
            info: 'La memoria popular conserva de Luis IX de Francia la imagen de un soberano que tenía la costumbre de hacer justicia a sus súbditos bajo un viejo roble cerca de su castillo en Vincennes. La Iglesia lo recuerda el 25 de agosto.',
        },
        {
            saint: 's. José de Calasanz, sacerdote, fundador de los Escolapios',
            info: 'José, fue un sacerdote español que convivió con la rica familia Colonna de Roma. Allí, el gran abandono e ignorancia de los jovenes pobres lo conmovió tanto que se dedicó a su educación, fundando la primera escuela gratuita de Europa, dirigida por la Orden de los Escolapios. Fue canonizado en 1767.',
        },
    ],
    '08-26': [
        {
            saint: 's. Ceferino, papa',
            info: 'Papa desde 199 bajo la persecución de Septimio Severo, durante 20 años combatió la herejía modalista; doctrina errónea de la relación entre el Padre y el Hijo. Encargó a su diácono Calixto la construcción del cementerio de la Iglesia de Roma en la Vía Apia. Será el primer Papa en ser sepultado allí.',
        },
        {
            saint: 's. Maximiliano, mártir en la via Salaria antigua',
            info: 'No existen informaciones seguras sobre san Maximiliano, mártir romano del primer siglo. Sólo se sabe que ya desde el siglo VII los peregrinos veneraban su memoria en el cementerio de Basilla, a lo largo de la antigua Vía Salaria; al parecer, dentro de la pequeña basílica dedicada a san Hermes.',
        },
        {
            saint: 'San Alejandro de Bérgamo mártir',
            info: 'Entre los siglos III y IV, el centurión Alejandro comandaba en Oriente la legión de Tebas. Trasladado a Occidente, se le ordenó capturar y consignar a los cristianos, pero como él también se había convertido, desertó y escapó. Fue capturado y martirizado en Bérgamo, de la que ahora es el patrón.',
        },
    ],
    '08-27': [
        {
            saint: 's. Mónica, madre de S. Agustín, obispo',
            info: 'Santa Mónica, madre de San Agustín, de fe firme y profundos valores cristianos en lo cotidiano. La oración fue su fortaleza en toda su vida. Ferviente observante de las tradiciones de la Iglesia, depositó toda su esperanza en Dios. Su memoria se celebra el 27 de agosto.',
        },
    ],
    '08-28': [
        {
            saint: 's. Agustín, obispo de Hipona y doctor de la Iglesia',
            info: 'Buscador inquieto de la Verdad, su vivencia en el camino de la conversión, lo hace siempre actual. Autor de numerosos escritos San Agustín está entre los Padres de la Iglesia que mejor han explicado los principios y dogmas del Cristianismo. Muere el 28 de agosto del 430.',
        },
        {
            saint: 's. Hermes, mártir en la via Salaria antigua',
            info: 'De origen griego, Hermes llegó a Roma en el siglo III y se convirtió en ciudadano romano. Nombrado prefecto, se convirtió al cristianismo con su esposa, hijos, hermana y mil esclavos. Fue arrestado por orden de Trajano que envió a Aureliano a Roma y lo hizo martirizar por el tribuno Quirino.',
        },
    ],
    '08-29': [
        {
            saint: 's. Sabina, romana, en su Iglesia del Aventino',
            info: 'Santa Sabina es una mártir cristiana que murió por su fe en el año 120 aproximadamente. Sus reliquias se encuentran en la Basílica de Santa Sabina en el Aventino (Roma). La Iglesia la recuerda el 29 de agosto.',
        },
    ],
    '08-30': [
        {
            saint: 'ss. Félix, sacerdote, y Adauto, mártires en la via Ostiense',
            info: 'Identificados por la tradición como hermanos, sepultados en el cementerio de Comodilla, una antigua Passio relata que en la época de Diocleciano, mientras el presbítero Félix era llevado al martirio, se añade a lo largo del camino Adauto, quien se declaró cristiano y compartió su misma suerte.',
        },
        {
            saint: 's. Pamaquio, senatore romano',
            info: 'El cristiano senador romano, Pamaquio, se convirtió en monje en 387 y dedicó su vida a los pobres. Fue cofundador de un albergue en la desembocadura del Tíber donde acogía gratuitamente a peregrinos pobres y enfermos. Trabajó en la construcción de la Basílica de los santos Juan y Pablo en el Celio.',
        },
    ],
    '08-31': [
        {
            saint: 'b. Alfredo Ildefonso Schuster, cardenal, arzobispo de Milano',
            info: 'Ildefonso fue un brillante sacerdote romano de formación benedictina, que fue consagrado arzobispo de Milán y creado cardenal por Pío XI. Eximio pastor en los difíciles años de la guerra, siempre muy cercano a su pueblo, murió en 1954 en el seminario de Venegono, construído con su colaboración.',
        },
        {
            saint: 's. Raymondo Nonato, cardenal, sacerdote mercedario',
            info: 'Catalàn, nacido vivo del cuerpo ya sin vida de su madre. Su apellido es en realidad un apodo, "no nacido". Alrededor de 1224 se hizo mercedario y se fue a Argelia. Allí fue encarcelado y torturado para que no pudiera predicar. Cuando regresó a España Gregorio IX lo creó cardenal. Murió en 1240.',
        },
        {
            saint: 'ss. José de Arimatea y Nicodemo, discípulos del Señor',
            info: 'José de Arimatea y Nicodemo se celebran juntos pues ambos aparecen en los evangelios cuando bajaron de la cruz el cuerpo exánime de Jesús, lo envolvieron en telas de lino y lo sepultaron. El primero era un miembro ilustre  del Sanedrín; el segundo un fariseo que defendió a Jesús ante los sacerdotes.',
        },
    ],
    '09-01': [
        {
            saint: 's. Egidio, abad',
            info: 'San Egidio (Gil) –Gilles en francés– sus orígenes están rodeados de misterio, vivió probablemente entre el siglo VI y el VIII. Fue eremita en un bosque en el sur de Francia hasta que por amistad de un rey, se hizo abad y guía espiritual de toda la región. La Iglesia lo recuerda el 1 de septiembre.',
        },
    ],
    '09-02': [
        {
            saint: 's. Zenón, mártir de Nicomedia',
            info: 'Padre y dos hijos, Zenón, Concordio y Teodoro. Mártires por manos del último emperador romano declarado pagano, Juliano el Apóstata, que quiso bloquear el camino para el cristianismo. Su martirio, entre la historia y la leyenda, es contado por una antigua passio latina.',
        },
    ],
    '09-03': [
        {
            saint: 's. Gregorio Magno, papa y doctor de la Iglesia',
            info: 'San Gregorio Magno, que recordamos el 3 de septiembre, es uno de los cuatro grandes doctores de la Iglesia de Occidente, junto a los santos Ambrosio, Jerónimo y Agustín.',
        },
    ],
    '09-04': [
        {
            saint: 's. Bonifacio I, papa',
            info: 'Bonifacio fue elegido papa en 418 en un cónclave sumamente complicado. Posteriormente, sus detractores eligieron a Eulalio como antipapa. Bonifacio tuvo la habilidad de hacer retractar a Eulalio y luego lo nombró obispo. Así recuperó el lastimado prestigio de la Iglesia de Roma. Murió en el 422.',
        },
        {
            saint: 's. Marino, eremita',
            info: 'Único santo fundador y patrón de un Estado, Marino llegó a Rimini desde Dalmacia en el año 257 para trabajar como cantero. Para escapar de la persecución anticristiana se refugió en el Monte Titano donde fundó su comunidad junto con s. León. Fue ordenado diácono y murió como ermitaño en el año 366.',
        },
        {
            saint: 's. Rosalia, virgen palermitana',
            info: 'Patrona de Palermo, Rosalía nació alrededor del 1125. De familia noble, abandona la corte para dedicarse a una vida de ermitaña. Muere a los 35 años, pero su popularidad es enorme cuando, durante la peste de 1624/25, sus restos, llevados en procesión por la ciudad, sanaron a los enfermos.',
        },
        {
            saint: 's. Moisés, legislador y profeta',
            info: 'Salvado de las aguas del Nilo y educado por el Faraón en el siglo XIV A.C., Dios lo envió a liberar al pueblo de Israel. Tambièn por medio de Moisés Dios dio a los judíos la Ley y los acompañó hacia la conquista de la Tierra Prometida. Su vida y su obra se narra en cuatro libros del Pentateuco.',
        },
    ],
    '09-05': [
        {
            saint: 'ss. Aconcio, Nono, Herculano y Taurino, mártires de Porto',
            info: 'No hay noticias ciertas de estos mártires de Fiumicino, el antiguo Porto. El Papa Formoso llevó las reliquias de Nonno, Herculano y Taurino a una iglesia en la isla Tiberina. Una iglesia dedicada a Aconcio aparece en un documento del siglo X. Se les nombra en las fabulosas leyendas de Santa Aurea.',
        },
        {
            saint: 's. Madre Teresa de Calcuta',
            info: 'Testimonio de la caridad y de la misericordia, Madre Teresa es un ejemplo para todos, no sólo los creyentes, sobre las maravillas que puede hacer una persona cuando se confía totalmente a Cristo. Ganó el premio Nóbel por la paz, fue fundadora de las Misioneras de la Caridad, “la Madre de los pobres”',
        },
    ],
    '09-06': [
        {
            saint: 's. Zacarías, profeta',
            info: 'El penúltimo de los Profetas menores, Zacarías. Inicia su ministerio en el 520 a.C., y vive el período de reconstrucción del Templo de Jerusalén. Sus palabras, entre las más citadas en la Biblia después de Isaías, exhortan con visiones y parábolas a la penitencia que se cumplan las promesas de Dios.',
        },
        {
            saint: 's. Onesíforo, discípulo de s. Pablo',
            info: 'Según la carta de s. Pablo a Timoteo, escrita en la cárcel de Roma, Onesíforo es un discípulo de Éfeso que lo compañó en la evangelización y le dio conforto en la cárcel. (Cf Tim 1,16-18). Las tradiciones añaden que fue bautizado por s. Pablo; que luego fue obispo y que fue martirizado con Porfirio.',
        },
    ],
    '09-07': [
        {
            saint: 's. Reina, virgen y mártir',
            info: 'Originaria de Alise, Reina era la hija de Olibrio, un jefe galo del siglo III. Habiendo quedado huérfana de madre, desde muy joven se convirtió al cristianismo y sufrió el martirio de manos de su padre pagano, que prefirió matarla antes que sufrir la vergüenza de tener una hija cristiana.',
        },
    ],
    '09-08': [
        {
            saint: 's. Tomás da Villanueva, obispo de Valencia',
            info: 'Elegido arzobispo de Valencia, Tomás encarnó el ideal evangélico del Buen Pastor más con acciones que con palabras. Fue un gran predicador, solícito con todos, en especial con los pobres y los jóvenes; defendió el territorio y la fe cristiana, y fundó el seminario de la Presentación. Murió en 1555.',
        },
        {
            saint: 's. Sergio I, papa',
            info: 'De una familia siria de Palermo, Sergio I fue un hombre de fe que puso fin a las antiguas discordias. Por ejemplo, cuando el emperador Justiniano II quiso imponer normas emanadas en un Concilio de sólo obispos orientales: Sergio se opuso tenazmente aún con la fuerza de los ejércitos. Murió en 701.',
        },
    ],
    '09-09': [
        {
            saint: 's. Pedro Claver, sacerdote jesuita, apóstol entre los negros deportados',
            info: 'Sacerdote de la Compañía de Jesús, San Pedro Claver pasó a la historia como uno de los más generosos misioneros de América meridional. Celebrado por la Iglesia el 9 de septiembre, trabajó durante más de 40 años en Colombia en favor de los africanos reducidos a esclavitud, bautizando a unos 300.000.',
        },
        {
            saint: 'S. Gorgonio, mártir en la via Labicana',
            info: 'Poco se sabe de Gorgonio, uno de los primeros mártires de la antigua Roma. Fue sepultado en el cementerio de Duas Lauros, sobre la Vía Labicana. Venerado en el siglo IV y en la Edad Media, fue luego olvidado. Sus restos fueron trasladados dos veces y ahora se encuentran en la Basílica Vaticana.',
        },
        {
            saint: 's. Audomar de Thérouanne',
            info: 'Homero, o Audómaro, es discípulo de san Eustasio, abad de Luxeuil. En el 642 ya era obispo de su ciudad, Thérouanne, Francia. Reevangelizó con mucha dedicación a la población que se había vuelto casi completamente pagana. Murió ciego alrededor del 670. Su culto ya estaba vivo en el siglo VIII.',
        },
    ],
    '09-10': [
        {
            saint: 's. Nicolás de Tolentino, sacerdote agustino',
            info: 'Nicolás nace en la región de las Marcas en 1245, en la diócesis de Fermo. Adolescente conoce a los agustinos y se consagra en la comunidad de Tolentino. Es un asceta con la sonrisa amable, las largas oraciones y el ayuno siempre van acompañados de simpatía y caridad. Muere en 1305.',
        },
    ],
    '09-11': [
        {
            saint: 'ss. Proto y Jacinto, mártires en la via Salaria',
            info: 'El martirio está comprobado por muchos hallazgos. Proto y Jacinto son dos esclavos cristianos eunucos que ayudan a la patrona, Eugenia, a convertirse a la fe y luego hacen lo mismo con su amiga Bassilla. Su prometido la acusa marcando el destino de los tres.',
        },
        {
            saint: 'b. Buenaventura de Barcelona, religioso franciscano',
            info: 'Durante 17 años, el Fraile Menor Buenaventura recorrió los conventos de Cataluña realizando las más humildes tareas. Un gran reformador, estableció los "Retiros", un retorno a la espiritualidad franciscana de los orígenes. Llamado "el Apóstol de Roma" por su misión en la ciudad, murió allí en 1684.',
        },
    ],
    '09-12': [
        {
            saint: 's. Guido de Brabante',
            info: 'Guido es uno de los santos más venerados de Bélgica. Nació en la región de Brabante en 950. Fue sacristán y luego comerciante para ayudar a los pobres, pero el Señor lo condujo en peregrinación de Roma a Tierra Santa. Considerado el precursor de San Francisco de Asís, fue canonizado en 1112.',
        },
    ],
    '09-13': [
        {
            saint: 's. Juan Crisóstomo, obispo y doctor de la Iglesia',
            info: 'Ha pasado a la historia con el sobrenombre de “boca de oro” por su maravillosa capacidad de hablar sobre la fe. San Juan Crisóstomo nació en el 349 cerca de Antioquía. Patriarca en Constantinopla, murió exiliado por haber condenado sin temor la corrupción del clero y de la corte bizantinos.',
        },
    ],
    '09-14': [
        {
            saint: 's. Alberto, patriarca de Jerusalén',
            info: 'Hombre famoso por su sabiduría, Obispo de Vercelli desde 1185, se convierte en Patriarca latino de Jerusalén. Reforma la Regla Carmelita con opciones que marcarán la escuela por siglos. Asesinado por el maestre del Hospital del Santo Espíritu a quien había depuesto por su mala vida.',
        },
    ],
    '09-15': [
        {
            saint: 's. Nicomedes, mártir en la via Nomentana',
            info: 'En la época de Domiciano, en el siglo I, el sacerdote romano Nicomedes fue descubierto sepultando a cristianos víctimas de persecución. Arrestado, se negó a sacrificar a los dioses paganos, fue asesinado y arrojado al Tíber. Su cuerpo, recuperado por un clérigo, fue sepultado en la Vía Nomentana.',
        },
        {
            saint: 's. Catalina de Genova, viuda',
            info: 'Fue después de un encuentro con su hermana monja que Catalina, de la importante familia Fieschi, cambió su vida para dedicarse a los pobres y sobre todo a los enfermos de sífilis; fundó la Compañía de las Damas de la Misericordia. La "Señora Catalinita", como la llamaban, murió por la peste en 1510.',
        },
    ],
    '09-16': [
        {
            saint: 'Ss. Cornelio, Papa y Cipriano, obispo, mártires',
            info: 'Cornelio, Papa romano, murió en 253; Cipriano, obispo cartaginés, en 258. Ambos son mártires que contemporáneamente fueron testigos de aquel amor por la verdad que no cede ni se amedrenta aún delante del sacrificio extremo. En esta fecha recordamos la deposición del primero y la pasión del segundo.',
        },
        {
            saint: 's. Eufemia, mártir de Calcedonia',
            info: 'Eufemia, mártir de Calcedonia, en Bitnia, en la actual Turquía, durante la persecución de Diocleciano y del procónsul Prisco, fue martirizada en el año 303 después de sufrir muchas torturas. En la basílica dedicada a ella tuvo lugar del 451 al 452 "el Gran Concilio" ecuménico de Calcedonia.',
        },
        {
            saint: 'b. Víctor III, papa',
            info: 'De origen longobardo, antes de ser elegido Papa fue abad en Montecassino por 30 años. Roma estaba destruida y con un antipapa: en solo 5 meses de su gobierno, luchó por reparar los males materiales y eclesiales con excomuniones y celebrando un Concilio en Benevento. Murió en Montecassino en 1087.',
        },
    ],
    '09-17': [
        {
            saint: 's. Roberto Bellarmino, cardenal, obispo y doctor de la Iglesia',
            info: 'El padre lo quería político, el hijo entra a la Compañía de Jesús. Humanista, insigne teólogo de la Iglesia post-tridentina- S. Roberto Belarmino es creado cardenal en 1599. Es un hombre docto pero da todo a los pobres. Pío XI lo proclama Beato, Santo y Doctor de la Iglesia.',
        },
        {
            saint: 's. Colomba, virgen y mártir de Cordoba',
            info: 'Atraída por un grande amor al Señor, Colomba le dedicò totalmente su vida en un monasterio cerca de Córdoba, España. Ejemplo de santidad y grande estudiosa de la Escritura, durante la persecución de los Moros, desobedeció a los obispos y se autodenunció como cristiana. Murió mártir en 853.',
        },
    ],
    '09-18': [
        {
            saint: 's. Sofía',
            info: 'Se la recuerda en el Menologio junto a Santa Irene. Se conoce poco de su vida, pero se sabe que fue martirizada en Chipre. También es incierta la época en que vivió. Según algunas tradiciones, Santa Sofía pertenece a la época bizantina, mientras otros textos la colocan entre los primeros cristianos.',
        },
        {
            saint: 's. José da Cupertino, sacerdote franciscano',
            info: 'José de Cupertino, que vivió en el siglo XVII, consciente de su escasa educación escolar, se hacía llamar "Hermano Burro". Sin embargo, en modo gratuito y carismático recibió el don de la ciencia infusa y las levitaciones místicas. Se le considera el santo patrón de los estudiantes y los aviadores.',
        },
    ],
    '09-19': [
        {
            saint: 's. Jenaro, obispo de Benevento y mártir',
            info: 'Amado patrón de Nápoles, s. Jenaro fue obispo de Benevento, martirizado por la fe en 305 durante las durísimas persecuciones de Diocleciano. La devoción, ya viva en el siglo V, reconoce como un milagro la licuefacción de su sangre que ocurre tres veces al año: en mayo, septiembre y diciembre.',
        },
    ],
    '09-20': [
        {
            saint: 's. Eustaquio, en su Iglesia',
            info: 'Plácido, general del emperador Trajano, persigue un siervo cuando entre los cuernos nota una cruz luminosa y una voz que se le revela como el Cristo. Plácido se convierte con mujer e hijos, con el nombre de Eustaquio. Pierde la familia y se reúne con ella en la vigilia del martirio en el 140.',
        },
        {
            saint: 'ss. Andrea Kim Taego˘n, sacerdote, y Pablo Chông Hasang y Compañeros, mártires coreanos',
            info: 'El sacerdote Andrés Kim Taegon y el catequista laico Pablo Chong están entre los 103 mártires de la Iglesia coreana canonizados por Juan Pablo II en 1984 en Seúl: entre ellos, tres obispos y siete sacerdotes; 10 extranjeros. Otros 124 fueron beatificados por el Papa Francisco en 2014.',
        },
    ],
    '09-21': [
        {
            saint: 's. Mateo, apóstol y evangelista',
            info: 'De recaudador de impuestos a apóstol y evangelista: este es el resumen de la vida de San Mateo, llamado Leví, que vivió en tiempos de Jesús. Su nombre significa “Don de Dios”. La Iglesia lo festeja el 21 de septiembre, y es el patrón de los banqueros, los contables y los recaudadores.',
        },
        {
            saint: 's. Pánfilo, mártir en la via Salaria antigua',
            info: 'Lo que sabemos de Pánfilo es que fue uno de los primeros mártires cristianos y que está sepultado sobre la Via Salaria Antigua, en Roma, y que ya era venerado en el siglo VII. Insertado en el Martirologio por Usuardo, su cuerpo pudo haber sido transportado a la iglesia de San Silvestro en Capite.',
        },
        {
            saint: 'S. Efigenia',
            info: 'A Santa Efigenia se le atribuye la difusión del cristianismo en Etiopía. Virgen, la Iglesia la recuerda el 21 de septiembre  junto a san Mateo, que fue quien la convirtió a la religión cristiana.',
        },
    ],
    '09-22': [
        {
            saint: 'ss. Mauricio y Compañeros, soldados y mártires',
            info: 'Año 287. Antes de asaltar a los Galos rebeldes, el emperador Maximiano ordena un sacrificio a los dioses. Mauricio, jefe de la Legión Tebana, una unidad compuesta por cristianos, se niega y otros con él: “Somos soldados tuyos, pero también siervos de Dios”, escriben. Maximiano decreta la muerte.',
        },
        {
            saint: 's. Emérita, mártir en la via Ostiense',
            info: 'Emerita, o Merita, es una joven romana, martirizada durante la persecución de Valeriano. Sepultada en el cementerio de Comodila en la Via Ostiense, su cuerpo fue trasladado a la iglesia de s. Marcelo al Corso por el Papa s. León IV. A menudo se la recuerda junto con otra mártir: Degna o Deodata.',
        },
        {
            saint: 's. Basilla, mártir en la via Salaria antigua',
            info: 'De Basilea o Basilia se sabe que fue decapitada durante la persecución de Diocleciano y Maximiano. Una leyenda añade que en los lugares tocados por su cabeza habrían brotado milagrosamente siete fuentes. Sepultada en la Vía Salaria Antigua, sus reliquias se conservan en Couvert, Francia.',
        },
    ],
    '09-23': [
        {
            saint: 'S. Pio da Pietrelcina, sacerdote',
            info: 'Pietrelcina, 25 de mayo de 1887. Es el lugar y el tiempo en el que comienza la historia de uno de los santos más amados: el padre Pío, cuyo nombre secular era Francesco Forgione. Su vida, inspirada por el ejemplo de san Francisco, tiene una referencia constante: la Cruz, la pasión de Cristo.',
        },
        {
            saint: 's. Lino, papa',
            info: 'San Lino fue el segundo Papa, después de San Pedro. Su sucesor como Obispo de Roma, ejerció su ministerio durante once o doce años, aproximadamente desde el 68 D.C. hasta el 79 D.C. La Iglesia lo recuerda el 23 de septiembre.',
        },
    ],
    '09-24': [
        {
            saint: 's. Pacífico de s. Severino, sacerdote franciscano',
            info: 'Carlo Antonio Divini nace en San Severino Marche en 1653. Huérfano, entra entre los frailes menores. Adopta el nombre de Pacífico y comienza un largo y apasionado servicio de apostolado en su región. Su salud cada vez más frágil lo lleva a la muerte en 1721. Es proclamado beato en 1836.',
        },
        {
            saint: 'b. Colomba Rawski, abadesa',
            info: 'Joanna Matylda Gabriel fue una maestra polaca que se hizo benedictina con el nombre de Colomba. Abadesa en Lviv, dejó el monasterio y se fue a Subiaco y luego a Roma para dedicarse a los pobres de Testaccio y Prati. En 1908, fundó las Benedictinas de la Caridad que se ocupan de las jóvenes obreras.',
        },
    ],
    '09-25': [
        {
            saint: 's. Ferminio, obispo de Amiens y mártir',
            info: 'Originario de Pamplona, España, Fermín (o Firmino) nació en una familia pagana pero creció con un sacerdote que lo educó en el cristianismo. Evangelizador de Francia, se convirtió en obispo de Amiens y fue arrestado durante las persecuciones. Negándose a abjurar, fue martirizado entre 290 y 303.',
        },
    ],
    '09-26': [
        {
            saint: 'ss. Cosme y Damián, mártires',
            info: 'Gemelos y cristianos, nacidos en Arabia, se dedicaron gratuitamente a curar enfermos tras haber estudiado el arte de la medicina en Siria. Padecieron el martirio durante el reino del emperador Diocleciano. Son los Santos Cosme y Damián, patronos de médicos, cirujanos y farmacéuticos.',
        },
        {
            saint: 's. Senador, mártir de Albano',
            info: 'Poco se sabe sobre Senador, probablemente un mártir de los primeros siglos de la era cristiana. Se supone que nació en Albano Laziale, se cree que, en este famoso centro a lo largo de la Vía Appia había una iglesia dedicada a él en la que sucedían milagros.',
        },
        {
            saint: 's. Nilo, abad, fundador del monasterio de Grottaferrata',
            info: 'Calabrés de Rossano, en donde nace en 1910, Nicolás entra entre los monjes de S. Basilio. Luego se hace ermitaño, dividido entre la oración y el estudio. Se vuelve pronto modelo para los otros monjes. A los noventa años funda la Abadía de Grottaferrata.',
        },
    ],
    '09-27': [
        {
            saint: 's. Vicente de Paúl, sacerdote, fundador de la Congregación de la Misión y de las Hijas de la Caridad, patrón de todas las Asociaciones de Caridad',
            info: 'De origen humilde, Vicente se hizo sacerdote a los 19 años, pero sólo buscaba una vida cómoda. Al contacto con los pobres cambió y dedicó su vida a la caridad activa. Fundó las Damas y luego las Hijas de la Caridad. Fue responsable de la formación del clero. Murió en 1600 y fue canonizado en 1737.',
        },
        {
            saint: 'ss. Adolfo y Juan, mártires a Cordoba',
            info: 'Originario de Sevilla, Adolfo y Juan son hermanos, hijos de un noble musulmán y de una mujer cristiana. En Córdoba, donde profesan su fe, fueron martirizados en el año 824 durante la persecución morisca y enterrados en la iglesia de San Cipriano.',
        },
    ],
    '09-28': [
        {
            saint: 'ss. Lorenzo Ruiz y Compañeros, mártires',
            info: 'Hoy la Iglesia conmemora a Lorenzo Ruiz, un laico de origen filipino, junto con otros 15 mártires, todos ellos vinculados a la Orden Dominicana, asesinados entre 1633 y 1637 en Nagasaki, Japón. Los 16 fueron canonizados en 1987 por Juan Pablo II, que los había beatificado seis años antes en Manila.',
        },
        {
            saint: 's. Wenceslao, duque de Bohemia, mártir',
            info: 'Wenceslao nace en Praga en el 907, se convierte en duque de Bohemia jovencísimo. Cristianiza su país, es noble en el sentido más alto, una vez elige combatir en duelo para no arrastrar a sus soldados a la batalla, y el adversario se reconcilia con él. Muere por manos de su hermano en el 935.',
        },
        {
            saint: 's. Eustaquia, virgen, hija de s. Paula',
            info: 'Eustaquia, la tercera hija de la matrona Paola, convertida al cristianismo, se consagró virgen y se fue con su madre a Tierra Santa siguiendo a San Jerónimo. Era hábil en la lengua hebrea.  Murió en el año 419.',
        },
    ],
    '09-29': [
        {
            saint: 's. Miguel, arcángel',
            info: 'El Príncipe de la milicia celestial conduce la batalla contra las fuerzas del mal. La Iglesia latina lo celebra el 29 de septiembre, pero su culto es casi universal. A lo largo de la historia y por doquier le han sido consagrados muchos lugares por ser el defensor de la Iglesia y de la fe cristiana.',
        },
        {
            saint: 'b. Nicolás de Forca Palena, sacerdote Jerolamino',
            info: 'Originario de la pequeña ciudad de Teatino, sacerdote de la Orden de los Ermitaños de San Jerónimo (disuelta en 1933). Se trasladó a Roma y fundó una ermita con San Onofrio como su santo patrón. Murió a los cien años, en 1449.',
        },
        {
            saint: 's. Rafael, arcángel',
            info: 'Su culto se atestigua a partir del siglo XI; el calendario litúrgico fija su fiesta el 29 de septiembre,  con los Santos Arcángeles Miguel y Gabriel. Su nombre viene del hebraico “Rafa-El”, que significa “medicina de El” y se contrapone al demonio Asmodeo “el que hace perecer”.',
        },
        {
            saint: 'S. Gabriel, arcángel',
            info: 'Su nombre significa "fuerza de Dios": san Gabriel es uno de los tres arcángeles que la Iglesia recuerda el 29 de septiembre, junto con Miguel y Rafael. Es el mensajero de Dios, el encargado de anunciar su voluntad. En 1951 Pío XII lo proclamó Patrono de las telecomunicaciones.',
        },
    ],
    '09-30': [
        {
            saint: 's. Jerónimo, sacerdote y doctor de la Iglesia',
            info: 'San Jerónimo fue un Padre de la Iglesia Occidental que dedicó toda su vida al estudio de las Escrituras. Buscó poner en práctica la Palabra de Dios. Como asceta y letrado al servicio del Papa Dámaso, tradujo la Biblia de los textos hebreos y griegos al latín. Murió el 30 de septiembre del 420.',
        },
        {
            saint: 's. Simeón, conde de Crépy',
            info: 'Simón, conde de Crépy, renunció a todas sus riquezas y a su matrimonio para retirarse a la vida monástica, luego a la ermita del Macizo del Jura donde los peregrinos se reunían con él por su sabiduría. Murió en Roma en 1082.',
        },
        {
            saint: 's. Francisco de Borja, sacerdote jesuita',
            info: 'Francisco de Borja nació en Gandía, España, en 1510. Casado, 8 hijos, fue Virrey de Cataluña, pero nunca descuidó su fe. Viudo, lo dejó todo y entró en la Compañía de Jesús. Fundador de las misiones en América del Sur, murió en 1572.',
        },
    ],
    '10-01': [
        {
            saint: 's. Teresa del Niño Jesús, virgen carmelita, doctora de la Iglesia, patrona de las Misiones',
            info: 'Santa Teresa de Lisieux o Santa Teresita del Niño Jesús es la patrona de los misioneros y de Francia. En el centenario de su muerte, en 1997,  Juan Pablo II la proclamó doctora de la Iglesia; fue la tercera mujer homenajeada con este título, después de Caterina de Siena y Teresa de Ávila .',
        },
    ],
    '10-02': [],
    '10-03': [
        {
            saint: 's. Cándida, mártir en la via Portuense',
            info: 'Cándida, una virgen y mártir de los primeros siglos cristianos, fue probablemente sepultada en Roma, en el cementerio de Ponziano que se encuentra a lo largo de la Vía Portuense. Según algunos, ella fue la que dio cristiana sepultura al mártir Pimenio y por esta razón fue condenada al martirio.',
        },
    ],
    '10-04': [
        {
            saint: 's. Francisco de Asís, fundador de la Orden franciscana, patrón de Italia',
            info: 'Su fiesta se celebra el 4 de octubre. San Francisco de Asís es un faro para la Iglesia por su adhesión plena al Evangelio que le hizo merecer el nombre de “alter Christus”, por su elección de la pobreza para encontrar al Señor, por el amor a Dios Padre y a los hermanos, por el respeto de la creación',
        },
    ],
    '10-05': [
        {
            saint: 's. Faustina Kowalska',
            info: 'Entre los Santos que han hecho de la misericordia su misión de vida, encontramos ciertamente a Santa Faustina Kowalska, la humilde monja polaca a la cuál Jesús mismo ha confiado el mensaje de la Divina Misericordia y el deber de difundir el culto. La Iglesia la recuerda el 5 de octubre.',
        },
        {
            saint: 'ss. Plácido y Mauro, discípulos de s. Benito',
            info: 'Confiados al cuidado de San Benito en Subiaco, Plácido y Mauro se convirtieron en sus discípulos favoritos. Hay un episodio que los ve juntos: un día Plácido cayó en un lago y Benedicto, que lo supo por revelación divina, envió a Mauro que milagrosamente pudo caminar sobre las aguas para salvarlo.',
        },
    ],
    '10-06': [
        {
            saint: 's. Bruno de Calabria, sacerdote, fundador de los Certosinos',
            info: 'Bruno o Brunone parecía dirigirse hacia "la cima de la vida eclesiástica" pero dejó todo por la vida eremítica y fundó una comunidad en Chartreuse, Francia. Se trasladó a Roma a regañadientes por obediencia al Papa. Sólo "resucitó" cuando se fue a vivir en soledad en Calabria, donde murió en 1101.',
        },
        {
            saint: 's. María Francisca de las cinco Llagas, virgen franciscana',
            info: 'Es la primera napolitana canonizada: en 1867. En los Barrios españoles la llaman la "santarela". Su padre quería casarla, pero ella prefirió consagrarse a Dios en la Tercera Orden Franciscana con el nombre de María Francisca. Unida a la pasión de Cristo, vivió amando a Dios y sirviendo al prójimo.',
        },
    ],
    '10-07': [
        {
            saint: 's. Marco, papa',
            info: 'Marcos fue Papa por pocos meses en 336; sin embargo, construyó una Basílica en honor a s. Marcos Evangelista que se identifica con la actual Iglesia de s. Marcos. Creó el calendario civil más antiguo de la Iglesia Romana, que celebra por primera vez el nacimiento de Cristo el 25 de diciembre.',
        },
        {
            saint: 'ss. Sergio y Baco, mártires de Siria',
            info: 'Soldados de las legiones fronterizas, Sergio y Baco aceptaron creer en Jesús como el verdadero Salvador. Descubiertos, fueron llevados a Siria en la región de Rusafah y martirizados en el año 310. Por ello son recordados juntos aunque en la antigüedad el culto a Sergio estaba más extendido.',
        },
    ],
    '10-08': [
        {
            saint: 's. Pelagia, virgen y mártir de Antioquía',
            info: 'Se sabe con certeza que Pelagia era una mujer cristiana originaria de Antioquía, Siria. Algunas fuentes dicen que era una jovencita de quince años martirizada bajo la persecución de Diocleciano. En cambio, s. Juan Crisóstomo dice que fue una bailarina convertida por la predicación del Obispo Nonno.',
        },
    ],
    '10-09': [
        {
            saint: 's. Abraham, patriarca',
            info: 'Abraham es el primer gran patriarca de Israel. En el siglo 19 A.C. emigró de Ur con Sara y su sobrino Lot hacia Canaán. Dios puso a prueba su fe y le pidió que sacrificara a su único hijo, Isaac. Cuando iba a sacrificar a Isaac, Dios lo detuvo y premió su fe con una gran descendencia.',
        },
        {
            saint: 'ss. Dionisio, obispo, y Compañeros, mártires de Paris',
            info: 'Dionisio fue el primer obispo de París en el siglo III: allí le fue dedicada la Abadía de s. Dionisio. Por haber evangelizado la Galia junto con el diácono Rústico y el sacerdote Eleuterio, estos dos fueron decapitados. Dionisio llevó sus cabezas a París antes de ser martirizado él también.',
        },
        {
            saint: 's. Juan Leonardi, fundador de los Clérigos Regulares de la Madre de Dios',
            info: 'Originario de Lucca, Juan quiso ser boticario pero su llamada más fuerte era la de ser un buen pastor. Se ordenó sacerdote en 1571. Ha sido llamado el apóstol de la Reforma, fundó los Clérigos Regulares de la Madre de Dios, dedicados a la catequesis y fue cofundador del Colegio de Propaganda Fide.',
        },
    ],
    '10-10': [
        {
            saint: 's. Paulino, obispo de York, discípulo de s. Gregorio Magno',
            info: 'El monje Paulino fue enviado por el Papa s. Gregorio Magno para reevangelizar la Bretaña, donde dominaban las poblaciones paganas como los Anglos y los Sajones. Consagrado obispo de York, Paulino consiguió la conversión del rey gracias a su sabio método de "cristianización gradual". Murió en el 664.',
        },
        {
            saint: 'ss. Daniel, Samuel y Compañeros, primeros mártires franciscanos',
            info: 'En 1227 los Frailes Menores enviaron siete frailes a predicar el Evangelio entre los Moros de Marruecos. Daniel de Calabria, Samuel, Ángel, Donnolo, León, Nicolás y Ugolino fueron martirizados porque se negaron a abjurar. Conocidos como los mártires de Ceuta, fueron canonizados por León X en 1516.',
        },
    ],
    '10-11': [
        {
            saint: 's. Juan XXIII, papa',
            info: 'El pontificado de Juan XXIII no duró ni cinco años, pero sigue siendo inolvidable. Después de una larga experiencia diplomática y luego de haber pasado por dos guerras, en 1959 el "Papa bueno" convocó el Concilio Vaticano II para dar respuestas a los desafíos de la actualidad. Es santo desde 2014.',
        },
        {
            saint: 's. Felipe, diácono',
            info: 'Felipe es uno de los "siete hombres de buena reputación" elegidos como diáconos, (cf. Hch 6,3). Es el primer misionero que llevó el Evangelio a Samaria, (Hch 8,5-8), luego el Espíritu Santo lo llevó a Gaza, (Hch 8,26-28). Fue el jefe de la comunidad de Cesarea, donde acogió a s. Pablo. (Hch 21,8).',
        },
        {
            saint: 's. Alejandro Sauli, obispo de Pavia',
            info: 'Alejandro se hizo Barnabita a sólo 17 años y pronto fue nombrado Superior General. De confesor de s. Carlos Borromeo, en 1567, llegó a ser obispo de Aleria, en Córcega, donde se ocupó de todo, incluso de alimentar a los pobres fieles. Murió como obispo de Pavía, y fue canonizado en 1904 por Pío X.',
        },
    ],
    '10-12': [
        {
            saint: 's. Edisto, mártir en la via Ardeatina',
            info: 'Mártir del siglo I, sepultado a lo largo de la Vía Laurentina, según una famosa leyenda, Edisto fue un escudero de Nerón que, mientras cumplía su función con el emperador en Laurento, conoció a un presbítero local que lo ayudó a aceptar a Jesús como el Mesías y fue bautizado por el apóstol Pedro.',
        },
        {
            saint: 's. Serafín de Montegranaro, laico capuchino',
            info: 'Hermano laico de los Frailes Menores, Serafín recorrió muchos conventos antes de establecerse en Ascoli. Humilde y paciente, superaba los insultos y regaños con sus "dos libros": el crucifijo y la corona del rosario. Murió en 1604 en olor de santidad y fue canonizado por Clemente XIII en 1767.',
        },
        {
            saint: 'Nuestra Señora de Aparecida',
            info: 'En el mes de octubre, tradicionalmente dedicado a la Virgen María porque se festeja Nuestra Señora del Rosario, se celebra otra fiesta de la Madre de Dios: Nuestra Señora de Aparecida, patrona de Brasil, el 12 de octubre.',
        },
    ],
    '10-13': [
        {
            saint: 's. Teófilo, obispo de Antioquía',
            info: 'En 169, Teófilo fue el sexto obispo de Antioquía después de s. Pedro. Era un pagano que había aceptado la fe en Jesucristo gracias a los ejemplos de los creyentes y al estudio de las Escrituras. También escribió mucho para defender las verdades de la fe contra los errores y las herejías de la época.',
        },
    ],
    '10-14': [
        {
            saint: 's. Calixto I, papa y mártir',
            info: 'Esclavo, exiliado en Cerdeña, Calixto regresó a Roma llamado por el Papa Zeferino, que le confió el cuidado de los cementerios de la Iglesia. Construyó el cementerio homónimo sobre la Via Appia. Papa del 217 al 222 defendió la fe verdadera, fue indulgente con los pecadores y murió como mártir.',
        },
    ],
    '10-15': [
        {
            saint: 's. Teresa de Jesús, virgen, doctora de la Iglesia, carmelita descalza',
            info: 'Es una de las Santas y místicas más veneradas del mundo. Patrona de los escritores católicos, celebrada el 15 de octubre, es la primera mujer en ser proclamada Doctora de la Iglesia junto con Santa Catalina de Siena.',
        },
    ],
    '10-16': [
        {
            saint: 's. Margarita María Alacoque, virgen, de la Visitación',
            info: 'Margarita nació en Borgoña en 1647 y a los 24 años entró con las Visitandinas. Recibió muchas apariciones de María y Jesús, que le pidió adorar su Sagrado Corazón e instituir universalmente su fiesta. Así sucedió gracias a ella. En su biografia se hallan las famosas promesas de Jesús. Murió en 1690.',
        },
        {
            saint: 's. Eduviges, duquesa de Polonia, religiosa',
            info: 'La verdadera realeza está en servir a los más pobres. Su amor a Dios y a los abandonados distinguió a s. Eduviges, primero como duquesa de Silesia y Polonia y después como religiosa en un monasterio cisterciense. Vivió entre 1100 y 1200. El 16 de octubre se celebra su memoria en toda la Iglesia.',
        },
        {
            saint: 's. Gerardo Maiella, hermano laico redentorista',
            info: 'Gerardo fue un sastre desafortunado en la ciudad de Potenza pues su vocación era totalmente otra. Rechazado por los Capuchinos, fue aceptado por los Redentoristas y en el convento realizó las más humildes tareas. Soportó con ejemplar mansedumbre y paciencia las calumnias de una mujer. Murió en 1755.',
        },
    ],
    '10-17': [
        {
            saint: 's. Ignacio de Antioquía, obispo, mártir a Roma',
            info: 'Tercer obispo de Antioquía, en Siria, Ignacio, fue un pagano que en su vejez creyó con grande fe que Jesús era el Mesías esperado. Por esa fe ofrendó su vida bajo las persecuciones de Trajano. Después de un largo viaje testimoniado en siete admirables cartas, sufrió el martirio en el Coliseo romano.',
        },
        {
            saint: 'b. Pedro Casani, sacerdote esculapio',
            info: 'Originario de Lucca, Pedro entró en la Congregación de la Madre de Dios como hermano laico en 1610. Después de varias vicisitudes, siguió a s. José Calasanzio con los Escolapios, seguro de que a través de la escuela era viable la salvación de los jóvenes. Murió en 1647, como teólogo de grande fama.',
        },
    ],
    '10-18': [
        {
            saint: 's. Lucas, evangelista, médico, patrón de los artistas',
            info: 'Entre los Santos Evangelistas San Lucas es el más preciso en la descripción psicológica, y debe probablemente su fama de Santo pintor a esta característica. Su fiesta se celebra el 18 de octubre.',
        },
    ],
    '10-19': [
        {
            saint: 'ss. Juan de Brébeuf y Isaac Jogues, sacerdotes, y Compañeros, jesuitas, mártires canadienses',
            info: 'Estos mártires fueron 8 misioneros Jesuitas: 6 sacerdotes y 2 Hermanos coadjutores, que evangelizaron en los territorios del actual Canadá y los Estados Unidos. Fueron asesinados en odio a la fe entre 1642 y 1649 por las poblaciones indígenas locales, entre las que había estallado una feroz guerra.',
        },
        {
            saint: 's. Pablo de la Cruz, sacerdote, fundador de los Pasionistas',
            info: 'Nacido en una decaída familia noble, Pablo Francisco no era feliz de ser comerciante como su padre. Soñaba ir a combatir a los turcos, pero luego se hizo ermitaño y en 1725 fundó una nueva Congregación que honraba la Cruz de Jesús y meditaba su Pasión como su acto supremo de amor: los Pasionistas.',
        },
    ],
    '10-20': [
        {
            saint: 's. María Bertilla Boscardin, virgen, de Vicenza',
            info: 'Sor María Bertilla era una enfermera de las Maestras de Santa Dorotea Hijas de los Sagrados Corazones en Vicenza. Primero sirvió a los enfermos del hospital de Treviso y en 1922, ella misma cayó enferma con un tumor maligno que le causó una muerte temprana a sólo 34 años; fue canonizada en 1961.',
        },
    ],
    '10-21': [
        {
            saint: 's. Gaspar del Bufalo, sacerdote, fundador de los Misioneros de la Preciosísima Sangre',
            info: 'Gaspar nació en Roma en 1786 y sintió el llamado del Señor desde niño. Como sacerdote evangelizó a los pobres, desobedeció a Napoleón y convirtió a los masones y bandidos que infestaban el Estado Pontificio. En 1815, fundó las ramas masculina y femenina de los Misioneros de la Preciosísima Sangre.',
        },
        {
            saint: 's. Hilarión, abad',
            info: 'Palestino, de origen pagano, Hilarión estudió en Alejandría y se convirtió al cristianismo. Gracias a s. Antonio Abad, aprendió a amar la soledad contemplativa, la oración y la penitencia. Se retiró como ermitaño a Maiumma donde fundó varios monasterios e hizo conversiones; murió en Pafos en 372.',
        },
        {
            saint: 'S. Úrsula',
            info: 'Bellísima hija de un rey Bretón del siglo IV, Úrsula aceptó casarse con un rey pagano con la condición de que aceptase la fe cristiana. Partió a su futura boda en Colonia con 11 vírgenes - que por un error se transcribieron como 11.000 - pero el encuentro con los Hunos de Atila causó su martirio.',
        },
    ],
    '10-22': [
        {
            saint: 's. Juan Pablo II, papa',
            info: 'El tercer pontificado más largo de la historia ha sido el de Juan Pablo II, que duró casi 27 años. Primer Papa polaco, batió muchos records, por ejemplo, el número de viajes realizados. Convocó el Gran Jubileo del 2000 y "inventó" las Jornadas Mundiales de la Juventud.',
        },
        {
            saint: 's. Marcos, obispo de Jerusalén',
            info: 'En el siglo II, después del último asedio de Jerusalén bajo el emperador Adriano, Marcos, se convirtió en el primer obispo no judío de esa ciudad devastada y desintegrada por miedo a la persecución. Con gran fe y trabajo la reconstruyó y parece que sufrió el martirio bajo el emperador Antonio Pío.',
        },
    ],
    '10-23': [
        {
            saint: 's. Juan da Capestrano, sacerdote franciscano, patrón de los capellanes militares',
            info: 'Fue en la cárcel donde Juan escuchó la llamada del Señor y se convirtió en sacerdote de los Frailes Menores. Predicador en Italia y Europa, tres meses antes de su muerte en octubre de 1456, condujo la batalla de Belgrado contra los turcos. Santo desde 1690, es el patrón de los capellanes militares.',
        },
        {
            saint: 's. Severino Boezio, filósofo romano y mártir',
            info: 'Mártir en 524, Boecio, de noble familia romana, es considerado el punto de conjunción entre el final de la cultura greco-romana y el inicio de la Escolástica medieval. En la cárcel escribió su obra maestra: el De consolatione philosophiae, una síntesis entre el pensamiento clásico y el cristianismo.',
        },
    ],
    '10-24': [
        {
            saint: 's. Antonio María Claret, obispo, fundador de la Congregación de los Hijos del Corazón Inmaculado de María',
            info: 'Una destacada figura en la Cataluña del siglo XIX, Antonio no sólo anhela sino que quiere ser un verdadero misionero. En 1849 fundó la Congregación de los Hijos del Inmaculado Corazón de María o Misioneros Claretianos, hoy presentes en 65 países, y realizó su sueño partiendo a Cuba como obispo.',
        },
    ],
    '10-25': [
        {
            saint: 'ss. Crisanto y Daria, mártires en la via Salaria nueva',
            info: 'Crisanto, un pagano de Alejandría, llegó a Roma a estudiar y allí aceptó el anuncio de Jesús muerto y resucitado. Su padre trató de regresarlo a su fe pagana, incluso ofreciéndole la vestal Daria, pero ella también aceptó la fe en Cristo. Murieron mártires en 283 y son los patronos de Reggio Emilia.',
        },
        {
            saint: 'ss. Crispino y Crispiniano, mártires',
            info: 'En la época de Diocleciano, Crispín y Crispiniano se establecieron en Soissons, en la Galia belga - hoy Francia - donde trabajaron como zapateros que evangelizaban difundiendo la fe en que Jesús resucitado era el Señor y Mesías. Fueron arrestados por el emperador Maximiano y martirizados en el 285.',
        },
    ],
    '10-26': [
        {
            saint: 's. Demetrio, mártir',
            info: 'Históricamente hay pocas noticias sobre Demetrio, un diácono que vivió antes del siglo V y murió como mártir en Srijem, Panonia. Probablemente era un ciudadano de Tesalónica - ahora Salónico - en la provincia griega de Macedonia, donde fue arrestado por su predicación del Evangelio de Jesucristo.',
        },
        {
            saint: 'S. Ceda, Obispo',
            info: 'Hermano de s. Chad, Ceda fue un monje en Lindisfarne, Inglaterra. Después de convertir al rey Peada a la fe en Jesucristo como Señor y Mesías, fue enviado por s. Chad a evangelizar a los Anglos de las regiones centrales. Más tarde fundó el monasterio de Lastingham, donde terminó sus días en 644.',
        },
        {
            saint: 'S. Beano, Obispo',
            info: 'Del obispo escocés Beano (Bean o Beanus) se sabe muy poco. Vivió entre los siglos X y XI y gobernó la diócesis de Mortlach del 1015 al 1047, probablemente el año de su muerte. La sede de su diócesis, erigida en agradecimiento por la victoria sobre los Escandinavos, fue luego transferida a Abeerdeen.',
        },
    ],
    '10-27': [
        {
            saint: 's. Frumencio, obispo, apóstol de Etiopía',
            info: 'La primera persona en llevar el cristianismo a Etiopía no fue un misionero, sino un joven del siglo IV llamado Frumencio, que terminó en la esclavitud y luego fue milagrosamene liberado. Consagrado obispo de Axum por Atanasio, allí hizo florecer la comunidad cristiana hasta su muerte en el 383.',
        },
        {
            saint: 's. Evaristo, papa',
            info: 'Griego de Antioquía pero nacido en Belén, Evaristo se convirtió en el cuarto o quinto sucesor de Pedro, alrededor del 97 y gobernó durante unos 9 años, hasta aproximadamente el 105. No se conoce casi nada de su pontificado, pero según algunas tradiciones murió como mártir bajo el imperio de Trajano.',
        },
    ],
    '10-28': [
        {
            saint: 'ss. Simone y Judas (Tadeo), apóstoles',
            info: 'Dos santos Apóstoles de Cristo que, según la tradición, murieron mártires del Evangelio en Mesopotamia. La Iglesia celebra la Memoria de san Simón, llamado “el zelote”, y de san Judas Tadeo, el 28 de octubre de cada año.',
        },
    ],
    '10-29': [
        {
            saint: 's. Feliciano, mártir de Cartago',
            info: 'Casi nada se sabe de este santo mártir que vivió en el siglo III en Cartago, en el actual Túnez. Probablemente pagano, Feliciano recibió la Buena noticia de que Jesús era el Señor y Mesías y se convirtió a la fe cristiana. Precisamente por odio a la Iglesia y por confesar su fe, sufrió el martirio.',
        },
    ],
    '10-30': [
        {
            saint: 's. Germán, obispo de Capua',
            info: 'De rica familia, Germán donó sus bienes a los pobres y se dedicó a la vida ascética. Como obispo de Capua, fue enviado por el Papa Ormisda a Constantinopla en 516 para superar con éxito el cisma de Acacio, que había dividido por años a las Iglesias de Roma y de Oriente, cuando gobernaba Justino I.',
        },
    ],
    '10-31': [
        {
            saint: 's. Alfonso Rodríguez, religioso jesuita',
            info: 'Alfonso fue un comerciante español de tejidos que después de perder a su esposa e hijos, cambió su vida. Entró ya anciano con los Jesuitas y, como portero del convento de la isla de Mallorca, practicó heroicamente las virtudes cristianas de humildad, obediencia, constancia y santidad. Murió en 1617.',
        },
    ],
    '11-01': [
        {
            saint: 'Fiesta de todo los santos',
            info: 'Hoy la Iglesia festeja una gran Solemnidad y agradece al Espíritu Santo su acción santificadora en tantas personas de todos los tiempos y lugares. Ellas ya gozan eternamente de la felicidad de Dios. Los creyentes rezan unidos para imitar sus ejemplos, a fin de contemplar un día el Rostro de Dios.',
        },
    ],
    '11-02': [
        {
            saint: 'Conmemoracion de todos los fieles difuntos',
            info: 'El destino final del hombre no es disolverse en el polvo, sino vivir para siempre con Dios. Y para contemplar a Dios hemos de asociarnos a la muerte de Jesús. Por eso recordamos a los difuntos y nos unimos a ellos en oración: para que el Padre conceda a todos sus hijos gozar de su eterno Amor.',
        },
    ],
    '11-03': [
        {
            saint: 's. Martín de Porres, religioso dominico',
            info: 'El primer santo afroamericano nació en Lima, Perú, en 1579. Fraile dominico, herborista y curandero, encarnó las tres culturas que formaron América Latina, india, española y africana, y fue expresión viva de las obras de misericordia.  La Iglesia lo celebra el 3 de noviembre.',
        },
        {
            saint: 's. Silvia, madre de s. Gregorio Magno',
            info: 'Silvia fue una madre ejemplar. Su hijo Gregorio llegó a ser Papa, santo y Doctor de la Iglesia. Su villa romana en la colina del Celio será transformada en un monasterio. De viuda se dedicará a la contemplación y a la caridad desde el claustro en San Pablo extra Muros, donde morirá en 590.',
        },
    ],
    '11-04': [
        {
            saint: 's. Carlos Borromeo, arzobispo de Milán y cardenal',
            info: 'Cardenal a solo 22 años, Carlos, hijo de una familia lombarda del siglo XVI, era un joven amante de la vida mundana; pero tras la muerte de su hermano descubrió el amor de Dios. Convenció al Papa a reiniciar el Concilio de Trento, y como obispo fue un impulsor de la caridad para todos.',
        },
        {
            saint: 'ss. Vitale y Agrícola, mártires boloñenses',
            info: 'Vivieron entre los siglos III y IV, Agrícola fue un cristiano en Bolonia y Vitale el sirviente que lo acompañó en su conversión. Perseguido por ser cristiano, Vitale fue el primero en ser arrestado y torturado a la vista de su amo, quien a su vez aceptó valientemente ser testigo del amor cristiano.',
        },
    ],
    '11-05': [
        {
            saint: 'ss. Domnino, Teótimo y Compañeros, mártires',
            info: 'Todos originarios de Cesarea, pagan con la vida su fe. Donino es un joven médico que termina en la hoguera durante la persecución de Diocleciano. Para Teótimo, Filoteo y demás compañeros el destino se cumple durante los juegos del circo, cuando fueron dados como comida a las fieras.',
        },
    ],
    '11-06': [
        {
            saint: 's. Leonardo, eremita',
            info: 'Nace en Limoges en el siglo VI. Como todos los nobles Leonardo debe enrolarse, pero flanquea al arzobispo de Reims trabajando para liberar a centenares de prisioneros de guerras. Eremita, obtiene el permiso del rey Clodoveo para erigir el monasterio, que aún hoy es una etapa del Camino de Santiago.',
        },
    ],
    '11-07': [
        {
            saint: 's. Prosdócimo, primer obispo de Padua',
            info: 'Nace en Limoges en el siglo VI. Como todos los nobles Leonardo debe enrolarse, pero flanquea al arzobispo de Reims trabajando para liberar a centenares de prisioneros de guerras. Eremita, obtiene el permiso del rey Clodoveo para erigir el monasterio, que aún hoy es una etapa del Camino de Santiago.',
        },
        {
            saint: 's. Villibrordo, obispo en Europa del Norte',
            info: 'De origen inglés, Villibrordo de York salió de Amberes para evangelizar con no pocas dificultades Frisia, Transrenania, Flandes y Luxemburgo. Consagrado obispo de Utrecht, continuó viajando por Dinamarca para anunciar con mucho ahinco la Palabra de la Salvación; agotado, murió en Echternach en 739.',
        },
    ],
    '11-08': [
        {
            saint: 's. Adeodato I, papa',
            info: 'También llamado Deusdedit, Adeodato fue educado en el monasterio de San Erasmo en Roma. Elegido Papa en 615, en una época muy oscura y de fuertes controversias doctrinales entre Oriente y Occidente, no tuvo tiempo de ocuparse de ellas porque murió en 618, año del terremoto y de la epidemia de sarna.',
        },
        {
            saint: 'ss. Cuatro Coronados, mártires',
            info: 'No se puede crear una estatua al dios Esculapio siendo cristiano. Esta elección le cuesta la vida a Claudio, Nicostrato, Semproniano y Castorio, excelentes escultores del siglo IV, originarios de Panonia. El mismo Diocleciano los condena. Mueren en el Danubio encerrados en toneles de plomo.',
        },
    ],
    '11-09': [
        {
            saint: 's. María y Neón, mártires, en el cementerio de Calixto en la via Appia',
            info: 'En el año 257 el emperador Valeriano ordena una nueva persecución de cristianos. En la espiral de sangre termina también una familia griega: Hipólito, la hermana Paulina con su esposo Adria y los jóvenes María y Neón. En el siglo VIII sus restos son trasladados a la iglesia romana de Santa Ágata.',
        },
        {
            saint: 's. Teodoro, soldado, mártir',
            info: 'Originario de Oriente, Teodoro fue un soldado romano convertido a la fe cristiana que, en la época del emperador Maximiano se hallaba con su legión en Amasea, Anatolia. Se le ordenó sacrificar a los dioses pero respondió  destruyendo el templo de Cibeles. Fue martirzado por ese motivo.',
        },
    ],
    '11-10': [
        {
            saint: 's. León Magno, papa y doctor de la Iglesia',
            info: 'Uno de los más grandes Pontífices que han honrado la Sede romana”. Así definió Benedicto XVI a San León Magno. Vivió en el siglo V. Fue un Papa que pasó a la historia por haber inspirado el Concilio ecuménico de Calcedonia y por haber detenido a Atila, rey de los Hunos, dispuesto a invadir Italia.',
        },
        {
            saint: 's. Andrés Avellino, sacerdote teatino',
            info: 'Nació en Potentino, Italia. Su nombre de bautismo era Lancellotto. Fue ordenado sacerdote en 1545. Gracias a su director espiritual, el beato Juan Marinonio, se hizo Teatino en Nápoles y fue un Apóstol de la Cruz de Jesús. Murió el 10 de noviembre de 1608 mientras celebraba la eucaristía.',
        },
    ],
    '11-11': [
        {
            saint: 's. Martín, obispo de Tours',
            info: '“El Apóstol de las Galias” es uno de sus títulos. Martín de Tours está entre los Santos más conocidos. Primero soldado, después monje y obispo. Permaneció fiel a la elección de los pobres en nombre de Cristo al cual, una noche, bajo los despojos de un pobre, le donó la mitad de su manto.',
        },
        {
            saint: 's. Bartolomé, abad de Grottaferrata',
            info: 'De origen oriental, Bartolomé fue un monje del rito bizantino que se dedicó a la contemplación y al servicio de los pobres. Fue biógrafo de san Nilo con quien fundó la Abadía de Grottaferrata. Pío XII lo llamó "una luminaria de la Iglesia". En el siglo XI compuso muchos bellos himnos. Murió en 1055.',
        },
    ],
    '11-12': [
        {
            saint: 'S. Josafat Kuncewicz, obispo y mártir',
            info: 'En el siglo XVII, Josafat, obispo de Polotsk, Rutenia, región gobernada por el Rey de Polonia, dedicó su vida a buscar la unificación de la Iglesia Greco-Ortodoxa con la Iglesia Latina. Apoyó a la "Iglesia Uniata", pero los ortodoxos lo consideraron una traición y por ello fue martirizado en 1623.',
        },
        {
            saint: 's. Diego, laico franciscano',
            info: 'Nace en Alcalá del Puerto, España, alrededor del 1400. Entra entre los Franciscanos. No es sacerdote, sin embargo es enviado a enraizar el cristianismo en las Canarias. En Roma, durante la peste del 1450, mientras la Curia huye, él permanece para asistir a sus hermanos.',
        },
    ],
    '11-13': [
        {
            saint: 's. Nicolás I, papa',
            info: 'Nace en Roma a finales del 800, pronto es insertado en la corte papal y llega a ser Papa en el 858, antes de ser “coronado”. Gastó su vida para afirmar la autoridad del Sucesor de Pedro en una época de “rupturas” autonomistas de varias Iglesias locales. Muere en el 867. Su tumba está en San Pedro.',
        },
        {
            saint: 's. Agustina Pietrantoni, virgen',
            info: 'Fue una Hermana de la Caridad de Santa Juana Antida Thouret. Mientras Roma se hallaba en gran crisis polìtica, recibió la misión de asistir a los enfermos del Hospital del Espíritu Santo en Roma. Allí, en un ambiente de personas desquiciadas, fue apuñalada en 1894 por un hombre mentalmente enfermo.',
        },
    ],
    '11-14': [
        {
            saint: 's. Serapio',
            info: 'Nace en Londres en 1179. De chico Serapio está con su padre en la tercera Cruzada de Ricardo Corazón de León. Después de varias peripecias entra en los Mercedarios y se dedica al rescate y a la conversión de los esclavos, liberando a centenares en Francia, España y Argel, donde muere mártir en 1240.',
        },
    ],
    '11-15': [
        {
            saint: 's. Alberto Magno, obispo y doctor de la Iglesia, dominico',
            info: 'Alberto, el "doctor universal" y gran reformador de la Orden Dominicana, aún en vida fue reconocido como "Magno", es decir, grande. Fue maestro de s. Tomás de Aquino y pasó toda su vida entre sus amados estudios, enseñanzas y los encargos pastorales que le fueron asignados, hasta su muerte en 1280.',
        },
        {
            saint: 's. José Pignatelli, sacerdote jesuita',
            info: 'De una noble familia española, José entró en la Compañía de Jesús a temprana edad, donde se distinguió por su caridad y humildad. Expulsado del país junto con sus cofrades, trabajó para la restauración de la Compañía en toda Europa y de hecho fue su principal promotor hasta su muerte en 1811.',
        },
        {
            saint: 'S. Macuto',
            info: 'Se estima que San Macuto o Maclovio o Malo nació en Gales y que tuvo como misión evangelizar a los Bretones, no lejos de la ciudad de Aleth, que hoy día lleva su nombre Saint-Malo. Vivió entre el siglo VI y el VII y murió en torno al 649. Su fiesta se celebra el 15 de noviembre.',
        },
    ],
    '11-16': [
        {
            saint: 's. Margarita de Escocia',
            info: '"Brillante ejemplo de óptima esposa, madre y reina": el martirologio romano recuerda así la figura de Santa Margarita de Escocia, celebrada el 16 de noviembre. Mujer morigerada y caritativa, apoya a su marido, el rey Malcolm III, en el gobierno del reino y en la reforma de la Iglesia escocesa.',
        },
        {
            saint: 's. Gertrudis, virgen benedictina',
            info: 'Gertrudis nació en Eisleben, Alemania y creció en el monasterio cisterciense femenino de Helfta, Sajonia. A la edad de 26 años, tuvo una visión de Jesús y decidió consagrarle su vida. Las experiencias místicas y las pruebas físicas no la abandonarán hasta su muerte en 1302. Fue canonizada en 1738.',
        },
        {
            saint: 's. Inés de Asís, hermana de s. Clara, virgen',
            info: 'Siguiendo el ejemplo de Clara, su hermana mayor, Inés amó a Jesús y a los pobres y entró al convento de San Damián. Vivió con mucho amor y fidelidad la Regla Franciscana, como lo recomendaba Clara. Fundó el segundo convento de las Clarisas en Florencia en 1219, donde vivió hasta su muerte en 1253.',
        },
    ],
    '11-17': [
        {
            saint: 's. Isabel de Hungría, terciaria franciscana',
            info: 'Cuando muere a los 24 años, en 1231, Isabel ya es “Santa” para muchos. Casada a los 14, madre a los 15 y viuda a los 20. Elige la pobreza franciscana de la Tercera Orden. Visita y asiste a los enfermos, también a los repugnantes, sin darle importancia a su linaje de soberana del trono de Hungría.',
        },
        {
            saint: 's. Gregorio Taumaturgo, obispo de Neocesarea',
            info: 'Romano era diácono de la Iglesia de Cesarea; al inicio de la persecución de Diocleciano del 303 vio que los fieles cristianos se rendían a las órdenes imperiales que exigían honrar a los falsos dioses. Fue arrestado y murió como mártir por haberlos exhortado a perder el miedo y mantener pura la fe.',
        },
    ],
    '11-18': [
        {
            saint: 'S. Odón abad de Cluny',
            info: 'Odón nació cerca de Tours, Francia, alrededor de 880. De joven fue iniciado a la vida caballeresca, pero luego se convirtió en monje en Cluny, el mayor centro espiritual de la Europa contemporánea. Allí retomó la regla benedictina con tanta fielidad, que fue considerado el refundador de la regla.',
        },
        {
            saint: 'S. Rosa Filipina Duchesne',
            info: 'Filipina Rosa estudió con las Visitandinas de Grenoble, pero la Revolución le impidió consagrarse como religiosa. En 1801, un tiempo de paz, ya pudo entrar en la Sociedad del Sagrado Corazón, donde realizó su sueño de ser misionera en los Estados Unidos, donde creó una nueva comunidad en Louisiana.',
        },
        {
            saint: 'S. Romano de Antioquía',
            info: 'Romano era diácono de la Iglesia de Cesarea; al inicio de la persecución de Diocleciano del 303 vio que los fieles cristianos se rendían a las órdenes imperiales que exigían honrar a los falsos dioses. Fue arrestado y murió como mártir por haberlos exhortado a perder el miedo y mantener pura la fe.',
        },
    ],
    '11-19': [
        {
            saint: 's. Matilde (Mechtilde), virgen',
            info: 'Vive en la segunda mitad del 1200. Sajona de nacimiento, Matilde entra pronto entre las Benedictinas de Rodersdorf donde se hace monja. Alcanza a la hermana abadesa en Helfta y allí se distingue por su humildad y amabilidad. Tiene frecuentes visiones místicas que después recoge en un célebre texto.',
        },
        {
            saint: 's. Abdías, profeta',
            info: 'Cuarto de los profetas menores, vivió después de la caída de Jerusalén en 587 a.C. Su brevísimo libro relata la visión del regreso victorioso de los desterrados. Denunció la soberbia de Edom, enemigo de Israel y anunció su castigo. Abdías es considerado como el heraldo del triunfo del futuro Mesías.',
        },
    ],
    '11-20': [
        {
            saint: 's. Gelasio I, papa',
            info: 'Un luchador, el Papa Gelasio. Sube al Solio romano en el 496 y en cuatro años llega a extinguir las derivaciones paganas y las herejías como el maniqueísmo, el monofisismo, o el pelagianismo. Algunos de sus principios en materia eclesial son tan avanzados que se los acoge como del Vaticano II.',
        },
    ],
    '11-21': [
        {
            saint: 'b. María de Jesús Buen Pastor, fundadora de las Hermanas de la Sagrada Familia de Nazaret',
            info: 'Hija de la Polonia nobiliaria de finales de 1800, Francesca Siedliska supera sus enfermedades y las ambiciones de su padre por un buen matrimonio, y se consagra a los 31 años. En 1873 funda la congregación de las Religiosas de la Sagrada Familia de Nazaret, para reforzar la fe de las personas.',
        },
    ],
    '11-22': [
        {
            saint: 's. Cecilia, virgen y mártir, en el cementerio de Calixto',
            info: 'Santa Cecilia es una santa que es celebrada en todo el mundo como patrona de la música, de los músicos y cantantes. La Iglesia la recuerda el 22 de noviembre. Sobre su figura se mezcla mucho la historia y la leyenda. Fue virgen y mártir, vivió en Roma entre el siglo II y el siglo III',
        },
    ],
    '11-23': [
        {
            saint: 's. Clemente I, papa y mártir: sus reliquias son veneradas en la Iglesia que lleva su mismo título',
            info: 'Conocido como Clemente Romano fue el cuarto Papa, del 88 al 97. Se le recuerda como "Padre Apostólico" por su carta a los Corintios dirigida a restaurar la paz; uno de los documentos más antiguos sobre el primado de la caridad del Papa. Según una tradición del siglo IV, murió como mártir.',
        },
        {
            saint: 's. Felicitas, mártir en la via Salaria nueva',
            info: 'Según la tradición, Felícitas era una rica viuda que fue perseguida por ser cristiana en la época del emperador Antonino. Madre de siete hermanos, los apoyó espiritualmente durante el martirio que compartió con ellos alrededor del 165. Fue sepultada en el cementerio de Máximo en la Via Salaria Nueva',
        },
        {
            saint: 's. Columbano, abad',
            info: 'Si se piensa en un irlandés célebre, se piensa en Columbano. A los 20 años es un monje riguroso y ascético. A los 50 se convierte en misionero y con 12 compañeros evangeliza en Francia, Suiza y el norte de Italia fundando comunidades y reorganizando la vida eclesial. Su Regla monástica es un modelo.',
        },
    ],
    '11-24': [
        {
            saint: 's. Crisógono, mártir de Aquileia',
            info: 'No es muy claro si el soldado Crisógono haya sido también sacerdote y obispo, lo cierto es que fue martirizado durante la persecución del emperador Diocleciano en Aquilea, cerca de Trieste, en el año 303. La veneración por este mártir se extendió rápidamente de forma universal ya en el siglo IV.',
        },
        {
            saint: 'ss. Andrés Dũng Lạc, sacerdote, y Compañeros, mártires',
            info: 'Confiado a un catequista de una familia muy pobre, Tran fue bautizado con el nombre de Andrés y creció muy cristianamente. Ordenado sacerdote obtuvo muchas conversiones, pero el gobierno de Vietnam era hostil a los cristianos: encarcelado tres veces, se negó a apostatar y sufrió el martirio en 1839.',
        },
    ],
    '11-25': [
        {
            saint: 'bb. Luis y María Beltrame Quattrocchi, esposos',
            info: 'En 1905 Luis y Maria Beltrame Quattrocchi se unieron por el sacramento del matrimonio cristiano. Supieron caminar juntos y como familia hacia la santidad. Por vez primera en la historia, S. Juan Pablo II beatificó una pareja de esposos. Su memoria litúrgica se celebra en la misma fecha de su boda.',
        },
        {
            saint: 's. Moisés, mártir en Roma',
            info: 'Durante la persecución de los cristianos bajo Decio, en el siglo III, el Decano del colegio sacerdotal de Roma era Moisés, quien se distinguió por su posición indulgente hacia aquellos que habían renegado de su fe para salvar sus vidas. Murió después de un largo encarcelamiento en el año 251.',
        },
        {
            saint: 's. Pedro de Alejandría, obispo y mártir',
            info: 'Durante la persecución de Diocleciano, en 300, Pedro fue el obispo de Alejandría en Egipto, y por eso debió esconderse. En su ausencia su Comunidad sufrió un cisma. Fue encarcelado y martirizado en 311. Se le recuerda con otros tres santos obispos egipcios: los mártires Esichio, Pacomio y Teodoro.',
        },
        {
            saint: 'S. Catarina de Alexandria',
            info: 'La leyenda relata que ante el gobernador de Egipto y Siria, Maximino, Catalina en lugar de abjurar la fe convence a los dignitarios a convertirse en cristianos. Maximino los manda a matar y pide a la muchacha que se case con él. A su rechazo la hace matar en el 305. Su tumba está en el Sinaí.',
        },
    ],
    '11-26': [
        {
            saint: 's. Silvestre, abad, fundador de los Silvestrinos',
            info: 'Uno de los fundadores del monacato reformado, Silvestre, después de pasar tres años como ermitaño en las montañas de las Marcas, fundó una comunidad que adoptó la Regla de san Benito. Los nuevos monjes benedictinos se llamaron "silvestrinos". Murió en 1267 y fue canonizado en 1589 por Clemente VIII.',
        },
        {
            saint: 's. Siricio, papa',
            info: 'Llega a ser Papa en el 384 e inmediatamente establece una relación de confianza y colaboración con San Ambrosio de Milán. Siricio es un Pontífice moderado y equilibrado, además del primero, según los historiadores, en afirmar la primacía del “mayor Pedro” y hacerse llamar “Papa”.',
        },
        {
            saint: 's. Leonardo de Puerto Mauricio, sacerdote franciscano',
            info: 'Según s. Juan Pablo II, Leonardo fue "un sacerdote franciscano de palabra ardiente, que recorrió Italia para amonestar y convertir a inmensas multitudes, llamando a la penitencia y a la piedad". Para honrar la dolorosa pasión de Cristo, edificó en el Coliseo de Roma las 14 Estaciones del Vía Crucis.',
        },
        {
            saint: 'Beato Santiago Alberione',
            info: 'Fue el primer miembro de la Pía Sociedad de San Pablo en ser beatificado por Juan Pablo II en 1989. Originario de Alba, Piamonte, fue el director y fundador de la nueva casa paulina en Roma donde fue formador y evangelizador a través de un sabio uso de los medios de comunicación.',
        },
    ],
    '11-27': [
        {
            saint: 's. Virgilio, obispo de Salisburgo',
            info: 'Monje y abad en su Irlanda natal, Virgilio pasó la mayor parte de su vida en Salzburgo. Llamado allí como obispo por el rey de los Francos, Pipino el Breve, se dedicó con gran celo apostólico a la tarea de evangelizar y pacificar el recién conquistado Ducado de Baviera.',
        },
    ],
    '11-28': [
        {
            saint: 's. Santiago de la Marca, sacerdote franciscano',
            info: 'Gran predicador, con la severidad ablandada por la clemencia. Jaime, de la región de las Marcas, se hace franciscano en 1415 y es enviado a Europa del Este. Señorial por sus modos, sabe cautivar con gestos y palabras; arremete sobre todo contra la usura y para combatirla crea los Montes de Piedad.',
        },
    ],
    '11-29': [
        {
            saint: 's. Saturnino, mártir en la via Salaria nueva',
            info: 'Es uno de los infinitos mártires de los primeros siglos. De Saturnino, originario de Cartago, habla el Papa San Dámaso, que recuerda su exilio en Roma a causa de su fe bajo el emperador Decio y, por lo tanto, su muerte cruel acaecida en el 304 bajo Maximiano.',
        },
    ],
    '11-30': [
        {
            saint: 's. Andrés, apóstol',
            info: 'San Andrés Apóstol es el Santo Patrón de la Iglesia Ortodoxa de Constantinopla. Hermano de Simón Pedro, se distingue entre los santos por haber sido el primero que recibió la llamada de Jesús, y haber recibido el martirio en una cruz  decusata. Es el protector de los pescadores.',
        },
    ],
    '12-01': [
        {
            saint: 's. Eligio, obispo de Noyon',
            info: 'San Eligio, que se celebra el 1 de diciembre, es el patrono de los joyeros y por extensión, de los herreros, metalúrgicos, ferreteros, los herradores de caballos y también de los agricultores, los carreteros, los mecánicos y garajistas.',
        },
        {
            saint: 's. Nahum, profeta',
            info: 'El séptimo profeta menor, Nahum, que significa "Dios consuela", nació en Elcos, Galilea en el siglo VII A.C. En su libro se celebra con fina ironía el triunfo de la justicia divina: Nínive, la ciudad idolátrica, corrompida y opresora que había exterminado Tebas, ha sido arrasada por Babilonia.',
        },
    ],
    '12-02': [
        {
            saint: 's. Bibiana, matrona romana, en su Iglesia del Esquilino',
            info: 'Una leyenda muy poco histórica del siglo IV cuenta la grande fe de Bibiana que fue perseguida porque se negó a abjurar de Cristo. Encarcelada con su familia, violentada y condenada a un burdel, dio un testimonio de fe y de fortaleza inquebrantables. Hay una iglesia dedicada a ella en el Esquilino.',
        },
        {
            saint: 's. Silverio, papa',
            info: 'Hijo del papa s. Ormisda, Silverio fue el 58º Papa de la Iglesia latina, depuesto y luego obligado a abdicar en 537 por los seguidores de la herejía monofisita que gobernaban en Constantinopla. Murió exiliado en una pequeña isla del archipiélago pontino, Palmarola, de la que se convirtió en patrón.',
        },
        {
            saint: 's. Pimenio, mártir en la via Portuense',
            info: 'Pimenio, que vivió entre los siglos III y IV, fue un sacerdote entre cuyos alumnos se encontraban Donato o Crescencio, el futuro obispo de Arezzo, futuro mártir. También él sufrió el martirio, acusado de dar sepultura a los mártires, y fue sepultado en el cementerio de Ponciano en la Via Portuense.',
        },
    ],
    '12-03': [
        {
            saint: 's. Francisco Xavier, sacerdote jesuita, apóstol de las Indias, patrón de las Misiones',
            info: 'Patrono de Oriente, de la Obra de propagación de la fe y de las Misiones, San Francisco Javier es un verdadero "gigante de la evangelización". Vive en el siglo XVI y lleva el Evangelio a India, Japón y China. Junto con los santos Ignacio de Loyola y Pedro Fabro, funda la Compañía de Jesús.',
        },
    ],
    '12-04': [
        {
            saint: 's. Juan Damasceno, sacerdote y doctor de la Iglesia',
            info: 'Originario de Damasco, Siria, Juan nació en una familia árabe cristiana. Eligió luego la vida ascética siguiendo el ejemplo del monje Cosmo. Gran teólogo y predicador, se opuso a la Iconoclastia y escribió muchas obras teológicas importantes. Fue proclamado Doctor de la Iglesia en 1890 por León XIII',
        },
        {
            saint: 's. Bárbara, mártir',
            info: 'Nació en Nicomedia en 273. Hija de Dióscuro, se convirtió al cristianismo suscitando la ira de su padre, que trató en vano de disuadirla. Condenada, Bárbara sovrevivió milagrosamente a las torturas. Su padre la decapitó. Es la patrona de los bomberos y de los expertos en desactivar los explosivos.',
        },
    ],
    '12-05': [
        {
            saint: 's. Sabás, abad',
            info: 'El joven Saba decidió convertirse en monje y su carácter enérgico lo ayudó a dejar su casa para irse a Tierra Santa. En Palestina fundó una comunidad monástica, la "Laura". Fue  severo en su disciplina conventual y también luchó con gran determinación contra la herejía monofisita. Murió en el 532.',
        },
    ],
    '12-06': [
        {
            saint: 's. Nicolás de Bari, obispo de Mira',
            info: 'San Nicolás de Bari  es uno de los Santos más populares y amados, a causa de la tradición que lo considera el protector de niños y jóvenes. Su fiesta se celebra el 6 de diciembre.',
        },
        {
            saint: 's. Asela, virgen romana',
            info: 'Colaboradora de San Jerónimo, Asela vivió en Roma en el siglo IV. Consagrada al Señor, estudió la Biblia, practicó el ayuno, la penitencia y una delicada caridad hacia los pobres. Oraba sin cesar y, por las noches, honraba las reliquias de los mártires. El historiador Paladio también habla de ella.',
        },
    ],
    '12-07': [
        {
            saint: 's. Ambrosio, obispo de Milán y doctor de la Iglesia',
            info: 'Se le considera uno de los grandes doctores de la Iglesia de Occidente. Fue Obispo de Milán, inventor de los himnos, iniciador de la mariología y autor de célebres textos litúrgicos. San Ambrosio encarna el ideal del pastor. La Iglesia lo recuerda el 7 de diciembre.',
        },
    ],
    '12-08': [
        {
            saint: 's. Eutiquiano, papa, en el cementerio de Calixto',
            info: 'Eutiquiano nació en el siglo III en la ciudad de Luni, destruida luego por los normandos. Fue elegido Papa en 275. Durante su pontificado luchó contra la herejía maniquea y promovió un culto especial a los mártires, tanto que fue incluido inicialmente en el martirologio después de su muerte en 283.',
        },
    ],
    '12-09': [
        {
            saint: 's. Juan Diego Cuauhtlatoatzin',
            info: 'La narración de las apariciones de Guadalupe es fascinante. El protagonista es un indio mexicano desconocido, Juan Diego, que a mediados del siglo XVI conoció a la Virgen en una colina, lugar que se convertiría a lo largo de los siglos en el centro de la peregrinación mariana mundial.',
        },
        {
            saint: 's. Leocadia, virgen y mártir',
            info: 'Durante las persecuciones de Diocleciano, en Toledo, la joven Leocadia fue arrestada por el prefecto Daciano y murió en prisión. Una leyenda del siglo VIII, dice que en su fiesta, Leocadia se le apareció a san Ildefonso y le cortó un trozo de su velo que aún se conserva como reliquia en Toledo.',
        },
        {
            saint: 's. Siro, obispo de Pavia',
            info: 'Por un error que duró siglos se dijo que Sirio había sido el joven que ofreció los panes y peces que Jesús multiplicó milagrosamente. En realidad, Sirio fue el primer obispo de Pavia, consagrado en el siglo IV, fue un pastor itinerante e incansable que evangelizó una vasta zona del norte de Italia.',
        },
    ],
    '12-10': [
        {
            saint: 'B. María virgen de Loreto',
            info: '“Corazón mariano de la cristiandad”. Así Juan Pablo II definió el Santuario de la Virgen de Loreto, patrona de los aviadores, recordada el 10 de diciembre. Millones a través de los siglos han visitado a la “Virgen Negra” en el lugar en el que los ángeles transportaron la Santa Casa de la Virgen.',
        },
        {
            saint: 's. Mauro, mártir en la via Salaria',
            info: 'Según el Martirologio Jeronimiano, Mauro fue enterrado en una antigua catacumba en la Vía Salaria, el cementerio de Trasón, un noble romano. Fue un joven cuyo único hecho conocido fue su martirio heroico. S. Dámaso escribió esta epígrafe: "Mauro, un muchachito que ninguna tortura alejó de la fe".',
        },
        {
            saint: 's. Gregorio III, papa',
            info: 'Nacido en Siria, Gregorio III fue Papa durante diez años: del 731 al 741. Durante su pontificado, luchó contra la iconoclasia y defendió el patrimonio de San Pedro. Fue el gran evangelizador de Alemania: dio el palio de arzobispo a Bonifacio y erigió nuevas diócesis.',
        },
    ],
    '12-11': [
        {
            saint: 's. Dámaso I, papa',
            info: 'Gracias a Dámaso, Papa del 366 al 384, el recuerdo de los mártires no se perdió: cada tumba identificada era adornada con epígrafes que describían las gestas del difunto. Defendió el primado de la Sede Apostólica y comisionó a s. Jerónimo la traducción de la Biblia del hebreo y del griego al latín.',
        },
    ],
    '12-12': [
        {
            saint: 'B. María virgen de Guadalupe',
            info: 'Estrella de la evangelización de los pueblos, apoyo de los indígenas y de los pobres. El pueblo de los fieles implora humildemente su ayuda sobre el cerro del Tepeyac. Es la Bienaventurada María Virgen de Guadalupe en México que llevó el Evangelio a América. Su fiesta se celebra el 12 de diciembre.',
        },
        {
            saint: 'Beato Pío Bartosik sacerdote de la Orden de Frailes Menores Conventuales y mártir',
            info: 'A los 17 años Ludwik entró con los Frailes Menores Conventuales con el nombre de Pío. A los 26 años fue ordenado sacerdote. S. Maximiliano Kolbe lo llamó a Niepokalanow. Arrestado varias veces por los nazis, murió en Auschwitz en 1941. Es uno de los 108 mártires polacos de la Segunda Guerra Mundial.',
        },
        {
            saint: 'San Simón Phan Dàc Hòa, mártir',
            info: 'Simón fue uno de los 117 mártires vietnamitas canonizados por Juan Pablo II en 1988. Fue martirizado en 1840 en la violenta persecución anticristiana del emperador Minh. Médico y padre de familia, también sirvió a su ciudad como alcalde y se afilió a la Sociedad de las Misiones Extranjeras de París.',
        },
        {
            saint: 'Beato Bartolo Buonpedoni',
            info: 'Hijo de los condes de San Gimignano, Bartolo se retiró con los benedictinos de Pisa para buscar su vocación. Allí Jesús lo llamó a acompañarlo en su pasión, viviendo la caridad. En Volterra entró en la Tercera Orden Franciscana; se enfermó de lepra y asistió a los leprosos hasta su muerte en 1310.',
        },
        {
            saint: 'San Vicelino obispo de Oldenburg',
            info: 'Vicelino nació en Hameln y después de una juventud difícil, conoció a Norberto de Xantes, descubrió su vocación y fue ordenado sacerdote en 1126. Evangelizó la población Eslavo-Vagriana del norte de Alemania que no era cristiana, y fundó una comunidad de Canónigos Regulares Agustinos en Neumünster.',
        },
    ],
    '12-13': [
        {
            saint: 's. Lucía, virgen y mártir de Siracusa',
            info: 'Santa Lucía padeció el martirio el 13 de diciembre del año 304. Se narra que durante el proceso, el juez se enamoró de sus hermosos ojos, y que ella misma se los arrancó para acabar con esa pasión, enviándolos al juez. Nace de aquí la invocación a Lucía como protectora de la vista.',
        },
        {
            saint: 's. Aristón, mártir de Portos',
            info: 'Es uno de los muchos primeros mártires de los que no hay información. Según un documento, Aristón era amigo de Marco y Marcelliano, que fueron martirizados en Roma. Se sabe que en el siglo VII había una "ecclesia" en la Vía Ostiense que celebraba a Aristón, Cristina de Bolsena y Victoria de Sabina.',
        },
    ],
    '12-14': [
        {
            saint: 's. Juan de la Cruz, sacerdote y doctor de la Iglesia, carmelita descalzo',
            info: 'San Juan de la Cruz, maestro de teología y místico español del 1500, fue reformador de la familia carmelita junto a su amiga Santa Teresa de Jesús. Proclamado Doctor de la Iglesia por el Papa Pío XI en 1926, es llamado por la tradición “Doctor místico”. La Iglesia lo recuerda el 14 de diciembre.',
        },
    ],
    '12-15': [
        {
            saint: 's. Valeriano, obispo en Africa y mártir',
            info: 'Obispo de Avensa (hoy Túnez), testigo de la fe en Jesús verdadero Dios y verdadero hombre durante la persecución de los Vándalos. El Rey Genserico, arriano, lo obligó a vivir en las calles, con ochenta años, por haberse negado a entregar los ornamentos sagrados de la Iglesia. Murió en el siglo V.',
        },
    ],
    '12-16': [
        {
            saint: 's. David, rey y profeta',
            info: 'Dios lo eligió como  rey de Israel ( siglo X a. C.) mientras pastorea las ovejas, siendo el más pequeño de los hijos de Jesé: Dios no mira la apariencia sino el corazón del hombre. Guerrero y poeta, fue un gran pecador pero reconoció sus culpas y pidió perdón. De su estirpe nace Jesús.',
        },
        {
            saint: 's. Adelaida, emperatriz',
            info: 'Nace en 931 de Rodolfo, rey de Borgoña. Desposa Otón el Grande, emperador alemán del Sacro Romano Imperio. Reina por un periodo el Imperio a nombre del sobrino menor de edad  Otón III: atenta a los más pobres, construye iglesias y monasterios. Retirada a un monasterio benedictino, muere en 999.',
        },
    ],
    '12-17': [
        {
            saint: 's. Daniel, profeta',
            info: 'Judío de noble familia, es deportado a Babilonia ( siglo VII  a.C.). Por su sapiencia y capacidad de interpretar los sueños se vuelve funcionario de Nabucodonosor. Profetiza la caída del Impero babilónico. Fiel a la tradición de los padres, fue echado a los leones, pero Dios lo salva.',
        },
        {
            saint: 'ss. Ananías, Azarías y Misael',
            info: 'Jóvenes judíos en exilio en Babilonia (siglo VII a.C.), se convierten en funcionarios de Nabucodonosor. Negándose a adorar la estatua del Rey, relata el Libro del Profeta Daniel, son arrojados en un horno ardiente, donde caminan tranquilamente en el fuego, junto a un ángel, alabando al Señor.',
        },
        {
            saint: 's. Juan de Matha, sacerdote, fundador de los Trinitarios',
            info: 'Nace en 1154 en Francia, profesor de teología en Paris, deja todo convirtiéndose en sacerdote a 40 años. Con cuatro eremitas funda la Orden de la Santísima Trinidad. Parte a África: su misión es liberar  esclavos cristianos, a los que acoge en sus hospicios. Muere en Roma en 1213.',
        },
        {
            saint: 'b. Jacinto Cormier, sacerdote dominico',
            info: 'Giacinto Cormier nació en Orleans. De joven novicio, era un "ángel" pero de salud muy endeble. Luego, como reformador de la Orden Dominicana entre los siglos XIX y XX, gozó de una larga vida. El Papa Pío X lo llamó "el Santo de Roma" por su fe cristalina y su maravillosa habilidad para comunicarla.',
        },
    ],
    '12-18': [
        {
            saint: 's. Malaquías, profeta',
            info: 'Vive entre el siglo VI y V a.C. regresando del exilio babilonio, denuncia la religiosidad exterior de sus coterráneos, lejana de Dios y de la justicia. Exhorta a preparar el encuentro con el Señor y profetiza la venida del mensajero de Dios, Juan Bautista.',
        },
        {
            saint: 's. Gaciano, obispo de Tours',
            info: 'Enviado desde Roma en el siglo III para evangelizar la Galia junto a otros seis misioneros, fue el primer obispo de la ciudad de Tours, donde al inicio es acogido con gran hostilidad, teniendo que celebrar en las catacumbas. Con coraje y perseverancia, anuncia el Evangelio por 50 años.',
        },
    ],
    '12-19': [
        {
            saint: 'b. Urbano V, papa',
            info: 'Guillermo de Grimoard, monje benedictino francés, elegido Papa en Aviñón (1362-1370) con el nombre de Urbano V, intenta vanamente de regresar la Sede Apostólica a Roma y de reunir Iglesia de Occidente y de Oriente. Hombre austero, ayuda a los pobres  y combate con fuerza la corrupción en el clero.',
        },
        {
            saint: 's. Anastasio, papa',
            info: 'Anastasio de Massimi, de noble familia romana, fue elegido Papa en 399. De profunda espiritualidad, vive pobremente. Defiende con valor la fe católica contrastando el donatismo, herejía que quería una Iglesia rigorista y pauperista. Muere en 401.',
        },
    ],
    '12-20': [
        {
            saint: 's. Filogonio, obispo de Antioquía',
            info: 'Abogado sirio, era un gran orador, muy estimado por su sabiduría y equidad. Casado, tenía una hija. Es elegido obispo de Antioquía en 314. Promueve la lucha contra el arrianismo, herejía que negaba la divinidad de Jesús. Muere en prisión en 324, valeroso testimonio de la fe.',
        },
    ],
    '12-21': [
        {
            saint: 's. Miqueas, profeta',
            info: 'Nacido en el siglo VIII cerca de Jerusalén, es un campesino que Dios llama a ser profeta. Denuncia la explotación de los pobres, las injusticias cometidas por los potentes corruptos y condena la idolatría. Anuncia un gran alegría para Israel: el nacimiento del Mesías en Belén.',
        },
        {
            saint: 's. Pedro Canisio, sacerdote jesuita y doctor de la Iglesia',
            info: 'Primer jesuita holandés, San Pedro Canisio, vivió en el siglo XVI. Venerado como segundo Apóstol de Alemania después de san Bonifacio. Fecundo escritor. Uno de los artífices de la renovación espiritual de la Iglesia católica promovida por el Concilio de Trento.',
        },
    ],
    '12-22': [
        {
            saint: 's. Francisca Saverio Cabrini, virgen, fundadora de las Misioneras del S. Corazón de Jesús',
            info: 'Entendió que la modernidad habría sido marcada por enormes flujos migratorios y personas en busca de paz y futuro, de quienes se ocupó. Esa es Santa Francisca Javier Cabrini según Francisco. La Iglesia recuerda a la patrona de los inmigrantes el 22 de diciembre.',
        },
    ],
    '12-23': [
        {
            saint: 's. Juan de Kety, sacerdote',
            info: 'Nacido en Kęty, Polonia, en 1390, es sacerdote y docente de filosofía en la Universidad de Cracovia. Elegido como preceptor de los príncipes polacos, con su pago da de comer a los pobres que encuentra. Estimado por todos por su caridad. Muere durante la Misa de la vigilia de Navidad de 1473.',
        },
    ],
    '12-24': [
        {
            saint: 's. Tarsila, virgen romana, tía de s. Gregorio Magno',
            info: 'Monja romana y tía paterna de Gregorio I Magno, Papa de 590 a 604, muy alabada por el sobrino por su fe y  caridad. Dedica su vida a la oración y a la ayuda del prójimo en dificultad. No se encierra en el monasterio, saliendo por las calles a asistir pobres y enfermos.',
        },
        {
            saint: 's. Irma, abadesa',
            info: 'Vive entre el siglo VII y VIII , abadesa benedictina del Monasterio de Tréveris (hoy Alemania), según la tradición es hija de San Dagoberto, Rey de Austrasia, la parte oriental de la Galia Merovingia. Ayuda a San Vilibrordo , el monje inglés evangelizador de Frisia.',
        },
    ],
    '12-25': [
        {
            saint: 's. Anastasia, mart. de Sirmio',
            info: 'Vive en el tiempo de Diocleciano, ayuda a los cristianos de Roma perseguidos por el emperador. Arrestada en Sirmio, en Iliria, no aceptando renegar la fe, es embarcada en una nave agujereada, pero se salva. Capturada nuevamente, continuando a no querer abandonar la fe, es quemada viva.',
        },
        {
            saint: 'b. María de los Apóstoles, virg., fond. de las Hermanas Salvatorianas',
            info: 'Therese von Wüllenweber era la hija de un barón alemán. Enamorada de las misiones, probó distintos institutos para consagrase como religiosa. Su vida se iluminó cuando conoció al p. Juan B. Jordán y fundó las Hermanas del Divino Salvador en Tivoli, Lacio. Murió el 25 de diciembre de 1907 a 74 años.',
        },
    ],
    '12-26': [
        {
            saint: 's. Esteban, primer mártir',
            info: 'San Esteban, Protomártir en cuanto fue el primero en derramar la propia sangre por Cristo. Su nombre significa "coronado". Fue elegido junto con otros 6 diáconos como colaborador de los Apóstoles y murió lapidado. La Iglesia lo celebra el 26 de diciembre. Es Patrono de los canteros y albañiles.',
        },
        {
            saint: 's. Dionisio, papa',
            info: 'Sacerdote de la Iglesia romana, Papa de 259 a 268, sostiene a los cristianos durante la persecución de Valeriano, ayuda a pobres, rescata prisioneros, envía dinero a comunidades lejanas de Roma. En la controversias teológicas del tiempo, defiende fuertemente  la unidad y trinidad de Dios.',
        },
    ],
    '12-27': [
        {
            saint: 's. Fabiola, viuda romana, discípula de s. Jerónimo',
            info: 'Romana, de la noble familia de los Fabi, se casa dos veces. Viuda, se convierte al cristianismo: renuncia a sus bienes para construir un hospicio para enfermos menesterosos. Se vuelve  discípula de San Jerónimo en Palestina. Regresa a Roma viviendo como eremita y ayudando a los más pobres.',
        },
        {
            saint: 's. Juan, apóstol y evangelista',
            info: 'A Juan, el apóstol amado por Jesús, se le atribuye el cuarto Evangelio. Las tres Cartas y el Apocalipsis provienen de la tradición de las Iglesias joánicas. Fue el más longevo de los Doce y no murió mártir, pues pasó el resto de su vida en Éfeso, junto a la Virgen María, que Jesús le había confiado.',
        },
    ],
    '12-28': [
        {
            saint: 'ss. Inocentes, mártires',
            info: 'Son los niños del Belén hasta dos años, hechos asesinar por el Rey Herodes con el objetivo de eliminar al Niño Jesús que las profecías anunciaban como el Mesías y nuevo Rey de Israel. Han sido honrados desde los primeros siglos, se los celebra como Santos Mártires Inocentes el 28 de diciembre.',
        },
    ],
    '12-29': [
        {
            saint: 's. Tomás Becket, obispo de Canterbury, mártir',
            info: 'De hombre de Estado a mártir por amor a Cristo y a la Iglesia. Canciller del soberano inglés Enrique II, convertido en obispo de Canterbury afronta a su amigo el rey para defender la verdad y la libertad. Viene asesinado en la Catedral de la ciudad el 29 diciembre 1170.',
        },
    ],
    '12-30': [
        {
            saint: 's. Félix I, papa',
            info: 'Sacerdote romano, Papa de 269 a 274, hace celebrar Misa sobre las tumbas que custodiaban las reliquias de los mártires cristianos. Defiende fuertemente la doctrina sobre la Trinidad de Dios y sobre la Encarnación del Verbo.',
        },
    ],
    '12-31': [
        {
            saint: 's. Silvestre I, papa',
            info: 'San Silvestre I fue un Papa que dirigió la Iglesia con sabiduría durante 20 años, en el tiempo en que el emperador Constantino construyó las primeras basílicas romanas y el Concilio di Nicea aclamó a Cristo como Hijo de Dios. Murió el 31 de diciembre del 335, y fue enterrado en Roma.',
        },
        {
            saint: 's. Melania, matrona romana',
            info: 'Melania, llamada "la Joven", pertenecía a la noble familia Valeria. Se mudó a Jerusalén con su marido Piniano y fundó una especie de comunidad monástica basada en el modelo de las comunidades orientales del siglo V. Allí Murió en el 440 después de haber compartido sus bienes con los pobres.',
        },
    ],
}

export function getDict() {
    const today = new Date()
    const year = today.getFullYear()
    if (even.length === 0) return odd
    return year % 2 === 0 ? even : odd
}
