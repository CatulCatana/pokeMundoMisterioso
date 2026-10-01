const Natures = {
  HARDY: "Audaz", DOCILE: "Dócil", BRAVE: "Valiente", JOLLY: "Alegre",
  IMPISH: "Agitada", NAIVE: "Ingenua", TIMID: "Miedosa", HASTY: "Activa",
  SASSY: "Descarada", CALM: "Serena", RELAXED: "Plácida", LONELY: "Solitaria",
  QUIRKY: "Rara", MISC: "Misc"
};

const Starters = {
  "Audaz": { m: 4, f: 25 },     
  "Dócil": { m: 1, f: 152 },    
  "Valiente": { m: 66, f: 4 },  
  "Alegre": { m: 7, f: 158 },   
  "Agitada": { m: 25, f: 104 }, 
  "Ingenua": { m: 158, f: 133 },
  "Miedosa": { m: 155, f: 258 },
  "Activa": { m: 255, f: 300 }, 
  "Descarada": { m: 252, f: 255 }, 
  "Serena": { m: 258, f: 1 },   
  "Plácida": { m: 54, f: 7 },   
  "Solitaria": { m: 104, f: 54 }, 
  "Rara": { m: 52, f: 252 }     
};

const DescripcionesNaturaleza = {
  "Audaz": "Pareces ser...\nEl tipo audaz.\nHaces tu tarea diligentemente,\ny sabes comer adecuadamente.\nTienes una gran fuerza de voluntad que te\npermite completar cualquier tarea.\nPero, también puedes ser tan terco que\nllegas a pelear con tus amigos...\nNada te saldrá bien cuando estés irritado,\nasí que aprende a reírte de ello.\n¡Una persona audaz como tú debería ser...",
  
  "Dócil": "Pareces ser...\nEl tipo dócil.\nEres muy amable.\nMuy servicial.\nPuedes hacerte amigo de cualquiera.\nEres una persona maravillosa.\n...\n¿Exageré un poco?\nNo lo creo.\nTú deberías ser el mejor juez de eso.\n¡Una persona dócil como tú debería ser...",
  
  "Valiente": "Pareces ser...\nEl tipo valiente.\nTienes un gran sentido de la justicia.\nOdias la maldad.\nTe enfrentarás a cualquier oponente.\n¡Eres un verdadero héroe!\n¡Adelante!\nPor la justicia...\nPor la paz en la tierra...\n¡Lucha contra las fuerzas del mal!\n...\nSi me equivoco...\n¡Esfuérzate por ser un verdadero héroe!\n¡Una persona valiente como tú debería ser...",
  
  "Alegre": "Pareces ser...\nEl tipo alegre.\nSiempre riendo y sonriendo,\nanimas a todos a tu alrededor.\n¡Te encantan las bromas!\nTienes muchos amigos y eres\npopular a donde quiera que vayas.\nPero a veces te dejas llevar y dices\ncosas que te meten en problemas.\nDeberías aprender a pensar antes\nde decir o hacer cualquier cosa.\n¡Una persona alegre como tú debería ser...",
  
  "Agitada": "Pareces ser...\nEl tipo agitado.\nEres juguetón, alegre,\ny te encantan las bromas.\nTambién tienes buen corazón.\nPor eso la gente a tu alrededor\nte encuentra tan irresistible.\n¡Debes ser la persona más popular!\n¿Oh? ¿No eres tan popular?\nO eres muy modesto...\no simplemente no te das cuenta.\nSeguro la gente es muy tímida para decirlo.\n¡Una persona agitada como tú debería ser...",
  
  "Ingenua": "Pareces ser...\nEl tipo ingenuo.\nEres muy curioso,\ny te encantan las cosas raras.\nTu actitud alegre y despreocupada\ndebe hacer que las cosas sean divertidas\npara la gente que te rodea.\nPero tienes un defecto.\nPuedes ser un poco infantil.\nNunca te puedes quedar quieto.\nTambién puedes ser un poco egoísta,\nasí que deberías tener cuidado.\n¡Una persona ingenua como tú debería ser...",
  
  "Miedosa": "Pareces ser...\nEl tipo miedoso.\nPuede que te cueste ir\nal baño en la noche.\nTambién puede que te dé miedo regresar\na la escuela por algo que olvidaste.\nSi alguna vez caminas por una calle\noscura, seguro volteas mucho hacia atrás.\n¡Pero tu naturaleza tímida\ntambién es tu punto fuerte!\nPorque aquellos que conocen el miedo\nson los que conocen el verdadero valor.\n¡Una persona miedosa como tú debería ser...",
  
  "Activa": "Pareces ser...\nEl tipo activo.\nTe gusta tomar el control\ny hacer que las cosas sucedan.\nEres alguien de mucha iniciativa.\n¿Pero también te estresas fácil?\nTe irritas cuando tus\namigos no llegan a tiempo.\nTe frustras cuando las cosas\nno salen como esperabas.\nTal vez presionas rápido el botón de elevador.\n...Tal vez estás presionando este botón ahora.\nCuidado, irritarse tan fácilmente no\nes bueno para tu bienestar.\n¡Una persona activa como tú debería ser...",
  
  "Descarada": "Pareces ser...\nEl tipo descarado.\nTiendes a ser algo cínico.\nA pesar de eso, hay algo\natractivo y encantador en ti.\n¿Acaso dices cosas arrogantes\nque hacen enojar a otros a veces?\n¿O te han llamado vanidoso o egoísta?\n¿Han dicho eso de ti?\n¿Eh? ¿Me estás diciendo que me largue?\nVen y dímelo en la cara...\n...¡Perdón!\nMe dejé llevar.\nDe cualquier forma, tu actitud cool y distante\nes lo que te define.\n¡Una persona descarada como tú debería ser...",
  
  "Serena": "Pareces ser...\nEl tipo sereno.\nEres capaz de dar consejos\na amigos que tienen problemas.\nNo te gusta pelear.\nEres una persona cálida y\namable que se preocupa por los demás.\nDebes tener muchos amigos\nque te admiran.\nSin embargo...\nPuedes ser un poco crédulo...\nAdemás de un poco descuidado...\ne incluso un poco desordenado.\nQuizás quieras tener eso en mente.\n¡Una persona serena como tú debería ser...",
  
  "Plácida": "Pareces ser...\nEl tipo plácido.\n¿A veces te distraes y\npierdes el autobús?\n¿O te encuentras quedándote dormido?\n¿O tu tiempo de reacción es\nun poco más lento que el de los demás?\nPero eso no es necesariamente malo.\nPuedes hacer las cosas a tu propio ritmo\nsin sentirte presionado.\nPuedes vivir de una forma relajada\ny sin prisas ni preocupaciones.\nCreo que es un estilo de vida envidiable.\nAdemás eres sorpresivamente popular.\n¡Una persona plácida como tú debería ser...",
  
  "Solitaria": "Pareces ser...\nEl tipo solitario.\nSiempre actúas alegre y\nbromista con otras personas.\nPero eso es solo porque\nestás con otras personas.\nSin embargo, cuando estás solo...\n¿Te sientes extrañamente deprimido?\nPor eso siempre quieres\nestar con otras personas.\nPero si andas sintiéndote deprimido muy seguido...\n¡Tu balance nutricional se altera! ¡Come verduras!\nSin embargo...\nNo es malo sentirse solitario.\nSabes lo que es cuando no estás solo.\nY es por eso que en realidad no estás solo.\n¡Una persona solitaria como tú debería ser...",
  
  "Rara": "Pareces ser...\nEl tipo raro.\nLa gente te considera un excéntrico\nque hace las cosas a su propio ritmo.\nNunca rompes tu ritmo.\nTu naturaleza despreocupada te hace\natractivo. Pero también resulta que\neres un poco infantil...\nEres inconstante y causas problemas a la\ngente que tiene que seguirte la corriente.\nSi te das cuenta de lo egoístamente\nque te comportas, intenta pensar antes\nde hacer algo precipitado.\n¡Una persona rara como tú debería ser..."
};

const categories = {
  HARDY: [
    { q: "Se acerca un examen.\n¿Cómo estudias para él?", a: [ { t: "Estudio mucho.", p: { HARDY: 2 } }, { t: "En el último segundo.", p: { RELAXED: 2 } }, { t: "Lo ignoro y juego.", p: { IMPISH: 2 } } ] },
    { q: "¿Puedes concentrarte en algo que te gusta?", a: [ { t: "Sí.", p: { HARDY: 2, DOCILE: 1 } }, { t: "No.", p: { QUIRKY: 2 } } ] },
    { q: "Cuando las cosas se ponen difíciles, ¿tú te pones a la altura?", a: [ { t: "Sí.", p: { HARDY: 2, BRAVE: 2 } }, { t: "No.", p: { SASSY: 2, QUIRKY: 2 } } ] },
    { q: "Hay un cubo. Si le pones agua, ¿hasta dónde lo llenarás?", a: [ { t: "Lleno.", p: { HARDY: 2 } }, { t: "A la mitad.", p: { CALM: 2 } }, { t: "Un poco.", p: { QUIRKY: 2 } } ] }
  ],
  DOCILE: [
    { q: "Te ofrecen elegir entre dos regalos.\n¿Cuál te llevas?", a: [ { t: "La caja grande.", p: { DOCILE: 2, NAIVE: 1 } }, { t: "La caja pequeña.", p: { TIMID: 2, CALM: 1 } } ] },
    { q: "¡Rompiste un huevo podrido en tu cuarto!\n¿Qué haces?", a: [ { t: "Abro la ventana de inmediato.", p: { DOCILE: 2, HASTY: 1 } }, { t: "Primero lo huelo.", p: { NAIVE: 2, RELAXED: 1 } } ] },
    { q: "Un amigo te trajo algo que habías olvidado.\n¿Cómo se lo agradeces?", a: [ { t: "Diciendo gracias normalmente.", p: { DOCILE: 2 } }, { t: "Diciendo gracias con una broma.", p: { NAIVE: 1, LONELY: 1 } }, { t: "Diciendo gracias, pero haciéndote el genial.", p: { SASSY: 2 } } ] },
    { q: "Hay una billetera a un lado de la calle.", a: [ { t: "¡La entrego a la policía!", p: { DOCILE: 2 } }, { t: "¡Sii! ¡Sii!", p: { NAIVE: 2 } }, { t: "¿Alguien está mirando...?", p: { IMPISH: 2 } } ] }
  ],
  BRAVE: [
    { q: "Vas a hacer salto en bungee por primera vez. Como da miedo, decides probar con un muñeco...\n¡Y la cuerda se rompe!\n¿Aún así intentarías saltar?", a: [ { t: "Sí.", p: { BRAVE: 3, IMPISH: 1 } }, { t: "No.", p: { DOCILE: 2, TIMID: 1 } } ] },
    { q: "¡Hay una invasión alienígena!\n¿Qué harás?", a: [ { t: "Pelear.", p: { BRAVE: 4 } }, { t: "Correr.", p: { TIMID: 2 } }, { t: "Ignorarlo.", p: { RELAXED: 2 } } ] },
    { q: "¡Se escucha un grito detrás de una puerta!\n¿Cómo reaccionas?", a: [ { t: "Abro la puerta de un tirón.", p: { HARDY: 1, BRAVE: 2 } }, { t: "Grito yo también.", p: { NAIVE: 2 } } ] },
    { q: "¡Un delincuente está molestando a una chica en una calle muy transitada!\n¿Qué haces?", a: [ { t: "Ayudar sin dudarlo.", p: { BRAVE: 3 } }, { t: "Ayudar, aunque tenga miedo.", p: { HARDY: 2, BRAVE: 2 } }, { t: "Llamar a la policía.", p: { DOCILE: 1, TIMID: 1, RELAXED: 1 } }, { t: "No hacer nada por miedo.", p: { TIMID: 2 } } ] }
  ],
  JOLLY: [
    { q: "¿Tienes una personalidad alegre?", a: [ { t: "Sí.", p: { JOLLY: 2, NAIVE: 1 } }, { t: "No.", p: { SASSY: 1, QUIRKY: 1 } } ] },
    { q: "¿Te gusta disfrutar ruidosamente con los demás?", a: [ { t: "Sí.", p: { JOLLY: 2, LONELY: 1 } }, { t: "No.", p: { TIMID: 1 } } ] },
    { q: "¡Son las vacaciones de verano!\n¿Adónde te gustaría ir?", a: [ { t: "¡A la playa!", p: { JOLLY: 2 } }, { t: "A un spa.", p: { CALM: 2 } }, { t: "A cualquier lado.", p: { QUIRKY: 2 } } ] },
    { q: "Una persona extranjera ha empezado a hablarte. Para ser honesto, no tienes idea de lo que está diciendo.\n¿Cómo respondes?", a: [ { t: "¡Jaja! ¡Sí, muy gracioso!", p: { JOLLY: 3 } }, { t: "Um... ¿Podrías repetir eso?", p: { HARDY: 2 } }, { t: "Claro... Bueno, me tengo que ir.", p: { TIMID: 2 } } ] }
  ],
  IMPISH: [
    { q: "¿Alguna vez has hecho una trampa de pozo?", a: [ { t: "Sí.", p: { IMPISH: 2, LONELY: 1 } }, { t: "No.", p: { CALM: 2 } } ] },
    { q: "¿Te gustan las bromas?", a: [ { t: "Sí.", p: { IMPISH: 2 } }, { t: "No.", p: { DOCILE: 1, RELAXED: 1 } } ] },
    { q: "¿Hay muchas cosas que te gustaría hacer?", a: [ { t: "Sí.", p: { HARDY: 1, IMPISH: 2 } }, { t: "No.", p: { SASSY: 1, QUIRKY: 2 } } ] },
    { q: "¡Están molestando a tu amigo!\n¿Qué haces?", a: [ { t: "Enfrentar al bravucón.", p: { BRAVE: 3 } }, { t: "Advertir al bravucón desde lejos.", p: { TIMID: 2 } }, { t: "Molestar al bravucón desde atrás.", p: { IMPISH: 2 } } ] }
  ],
  NAIVE: [
    { q: "¿Te gustan los juegos de palabras malos?", a: [ { t: "¡Me encantan!", p: { IMPISH: 1, NAIVE: 3 } }, { t: "Un poco.", p: { JOLLY: 2 } }, { t: "Ahórrame eso.", p: { SASSY: 2 } } ] },
    { q: "¿Tiendes a reírte mucho?", a: [ { t: "Sí.", p: { DOCILE: 1, NAIVE: 2 } }, { t: "No.", p: { QUIRKY: 2 } } ] },
    { q: "¿Los demás te llaman a menudo inmaduro?", a: [ { t: "Sí.", p: { JOLLY: 1, NAIVE: 2 } }, { t: "No.", p: { CALM: 2 } } ] },
    { q: "¿Te gusta imaginar cosas para divertirte?", a: [ { t: "Sí.", p: { NAIVE: 2 } }, { t: "No.", p: { HASTY: 2 } } ] }
  ],
  TIMID: [
    { q: "¡Una mano humana sale del inodoro!\n¿Qué harías?", a: [ { t: "Gritar y correr.", p: { TIMID: 2 } }, { t: "Cerrar la tapa sin decir una palabra.", p: { HARDY: 1, CALM: 2 } }, { t: "Darle un apretón de manos.", p: { BRAVE: 2, IMPISH: 1, NAIVE: 1 } } ] },
    { q: "Agarra cualquier dedo de tu mano izquierda con tu mano derecha.\n¿Qué dedo agarraste?", a: [ { t: "Pulgar.", p: { TIMID: 2 } }, { t: "Dedo índice.", p: { HASTY: 2 } }, { t: "Dedo medio.", p: { JOLLY: 2 } }, { t: "Dedo anular.", p: { SASSY: 2 } }, { t: "Dedo meñique.", p: { LONELY: 2 } } ] },
    { q: "¡De repente te encierran en un cuarto oscuro!\n¿Qué haces?", a: [ { t: "Patear la puerta.", p: { TIMID: 2 } }, { t: "Llorar.", p: { LONELY: 2 } }, { t: "Limpiarlo.", p: { IMPISH: 2, QUIRKY: 1 } } ] },
    { q: "¿Puedes entrar a una casa embrujada?", a: [ { t: "¡Sin problema!", p: { BRAVE: 3 } }, { t: "Uh... N-no...", p: { TIMID: 2 } }, { t: "Con alguien que me guste.", p: { SASSY: 2 } } ] }
  ],
  HASTY: [
    { q: "¡Recibes un regalo!\nPero no sabes qué hay dentro. Eres curioso, así que, ¿qué haces?", a: [ { t: "Abrirlo ahora mismo.", p: { HASTY: 2 } }, { t: "Abrirlo después.", p: { CALM: 2 } }, { t: "Hacer que alguien más lo abra.", p: { TIMID: 2 } } ] },
    { q: "¡Ganas la lotería!\n¿Qué haces con el dinero?", a: [ { t: "Gastarlo ahora.", p: { JOLLY: 2, HASTY: 1 } }, { t: "Ahorrarlo.", p: { HARDY: 1, CALM: 1 } }, { t: "Regalarlo.", p: { BRAVE: 2, QUIRKY: 2 } } ] },
    { q: "¡Encuentras un cofre del tesoro!\n¿Qué haces?", a: [ { t: "¡Abrirlo de inmediato!", p: { HASTY: 2 } }, { t: "No... Podría ser una trampa...", p: { TIMID: 2 } }, { t: "Seguro está vacío...", p: { SASSY: 2 } } ] },
    { q: "Tu amigo no se presenta a una reunión a la hora prometida.\n¿Qué haces?", a: [ { t: "Irritarme.", p: { DOCILE: 1, HASTY: 2 } }, { t: "Esperar pacientemente.", p: { RELAXED: 2 } }, { t: "Enojarme e irme.", p: { HASTY: 3 } } ] }
  ],
  SASSY: [
    { q: "El líder de tu país está frente a ti.\n¿Cómo le hablas?", a: [ { t: "Hablar calmadamente.", p: { HARDY: 2 } }, { t: "Hablar nerviosamente.", p: { DOCILE: 2 } }, { t: "¡COMO SEA!", p: { SASSY: 2 } } ] },
    { q: "¿Otras personas te dicen que cuides lo que dices?", a: [ { t: "Sí.", p: { IMPISH: 1, SASSY: 2 } }, { t: "No.", p: { CALM: 2 } } ] },
    { q: "¿Crees que eres genial?\nSé honesto.", a: [ { t: "Sí.", p: { SASSY: 2 } }, { t: "No.", p: { RELAXED: 2 } } ] },
    { q: "¿Puedes agradecer sinceramente a alguien cuando te sientes agradecido?", a: [ { t: "Sí.", p: { DOCILE: 2, CALM: 1 } }, { t: "No.", p: { SASSY: 2, QUIRKY: 1 } } ] }
  ],
  CALM: [
    { q: "¿Te consideras ocasionalmente aburrido o excesivamente cauteloso?", a: [ { t: "Sí.", p: { CALM: 2, LONELY: 1 } }, { t: "No.", p: { HARDY: 2 } } ] },
    { q: "¿Sueñas con holgazanear ociosamente sin mucha emoción?", a: [ { t: "Sí.", p: { CALM: 2 } }, { t: "No.", p: { IMPISH: 2 } } ] },
    { q: "¿Te gusta pelear?", a: [ { t: "Sí.", p: { IMPISH: 1, TIMID: 2 } }, { t: "No.", p: { CALM: 2, LONELY: 1 } } ] },
    { q: "¿Bostezas a menudo?", a: [ { t: "Sí.", p: { CALM: 2, RELAXED: 1 } }, { t: "No.", p: { HARDY: 1, HASTY: 2 } } ] }
  ],
  RELAXED: [
    { q: "¿Llegas a menudo tarde a la escuela o a tus reuniones?", a: [ { t: "Sí.", p: { SASSY: 1, RELAXED: 2 } }, { t: "No.", p: { HARDY: 2, HASTY: 1 } } ] },
    { q: "¿Tienes la sensación de que has estado más lento últimamente?", a: [ { t: "Sí.", p: { RELAXED: 2 } }, { t: "No.", p: { IMPISH: 1, HASTY: 2 } } ] },
    { q: "Es un día agradable en la playa.\n¿Cómo te sientes?", a: [ { t: "¡Esto se siente genial!", p: { JOLLY: 2 } }, { t: "Zzz...", p: { RELAXED: 2 } }, { t: "¡Quiero irme a casa pronto!", p: { HASTY: 2 } } ] },
    { q: "¿Te quedas dormido sin darte cuenta?", a: [ { t: "Sí.", p: { CALM: 1, RELAXED: 2 } }, { t: "No.", p: { HARDY: 2 } } ] }
  ],
  LONELY: [
    { q: "¿Te sientes solitario cuando estás solo?", a: [ { t: "Sí.", p: { TIMID: 1, LONELY: 2 } }, { t: "No.", p: { SASSY: 2 } } ] },
    { q: "¿Odias ser la última persona en salir del salón al final del día?", a: [ { t: "Sí.", p: { TIMID: 1, LONELY: 2 } }, { t: "No.", p: { BRAVE: 3, RELAXED: 1 } } ] },
    { q: "¿Qué haces con la luz de tu habitación cuando te vas a dormir?", a: [ { t: "La dejo encendida.", p: { TIMID: 1, LONELY: 2 } }, { t: "La apago.", p: { CALM: 2 } } ] },
    { q: "Es fin de semana, pero nadie quiere jugar contigo...\n¿Qué haces?", a: [ { t: "Irme de viaje.", p: { JOLLY: 1, LONELY: 1 } }, { t: "Pasar el rato sin hacer nada.", p: { CALM: 1, RELAXED: 2 } }, { t: "Acullarme en un rincón.", p: { TIMID: 1, LONELY: 3 } } ] }
  ],
  QUIRKY: [
    { q: "¿A veces te quedas sin cosas que hacer de repente?", a: [ { t: "Sí.", p: { QUIRKY: 2 } }, { t: "No.", p: { HARDY: 2 } } ] },
    { q: "¿Qué tan rápido respondes a un mensaje/correo?", a: [ { t: "Respondo de inmediato.", p: { HARDY: 1, HASTY: 1 } }, { t: "Podría responder o no.", p: { QUIRKY: 2 } }, { t: "Demasiado problema.", p: { SASSY: 2 } } ] },
    { q: "Hay una persona que te gusta... Pero no hay oportunidad de acercarse.\n¿Qué haces?", a: [ { t: "Declararle mi amor valientemente.", p: { HARDY: 1, BRAVE: 3 } }, { t: "Podría saludar...", p: { QUIRKY: 2 } }, { t: "Hacer una broma para llamar la atención.", p: { IMPISH: 2 } }, { t: "Mirar desde lejos.", p: { TIMID: 2 } } ] },
    { q: "El camino se divide en dos. Te dicen que hay un tesoro en el lado derecho.\n¿Qué haces?", a: [ { t: "Ir instantáneamente a la derecha.", p: { DOCILE: 2 } }, { t: "¡Es una trampa! Ir a la izquierda.", p: { SASSY: 2 } }, { t: "Elegir cualquier lado.", p: { QUIRKY: 2 } } ] }
  ]
};

function getRandomQuestions() {
  const catNames = Object.keys(categories);
  catNames.sort(() => 0.5 - Math.random());
  const selected = [];
  for (let i = 0; i < 8; i++) {
    const catArray = categories[catNames[i]];
    selected.push(catArray[Math.floor(Math.random() * catArray.length)]);
  }
  return selected;
}

window.Starters = Starters;
window.Natures = Natures;
window.DescripcionesNaturaleza = DescripcionesNaturaleza;
window.getRandomQuestions = getRandomQuestions;
