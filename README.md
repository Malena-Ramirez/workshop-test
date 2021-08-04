# Workshop pruebas unitarias o de integración

<ol>
  <li>¿Que hace la librería enzyme? </li>
    <p>  Es una herramienta que facilita la realización de test a componente de React. </p>
    
  <li>¿Cuáles son los tipos de pruebas y en qué consisten? </li>
    <ul>
      <li><strong>Unitarias</strong>: Son aquellas realizadas en un fragmento o pieza de código de forma independiente.</li>
      <li><strong>Integración</strong>: Comprueban la funcionalidad de la integración o comunicación entre diferentes unidades de código.</li>
      <li><strong>End to end<strong>: Prueba todo el flujo del programa desde el punto de vista del usuario.</li>
    </ul>

  <li>¿Qué es Shallow?</li>
    <p>  Renderiza componentes individuales, sin renderizar sus hijos. </p>
      
  <li>¿Qué es wrapper?</li>
    <p>  Permite envolver o contener al componente que se va a renderizar. </p>

  <li> ¿Qué hace el snapshots?</li>
    <p>Toma una instantanea o captura del código en un momento o estado específico.    </p>

  <li> ¿Qué hace el mount?</li>
    <p>  Puede renderizar en todo el DOM, incluyendo hijos de un componente. </p>

  <li> ¿Qué es toEqual y para qué sirve?</li>
    <p> Es un método que permite comparar objetos y arreglos. </p>

  <li> ¿Qué es toMatchSnapshot?</li>
    <p> Toma una instantanea del código para compararla con código que se está testeando. Lo anterior sirve para comparar una salida esperada con la salida actual. </p>

  <li> ¿Que hace la propiedad provider?</li>
    <p> Es un componente del objeto Context que permite que los componentes que lo consumen se suscriban a los cambios del contexto. </p>

  <li>  ¿Qué es toStrictEqual y para qué sirve?</li>
    <p> Es un método que permite verificar que 2 objetos tengo el mismo tipo y estructura.   </p>

</ol>
  
  -------------------
  
 <h2> ¿Qué hace el código? </h2>
  
  <ol>
    <li>
      Compara lo que devuelve la función <strong>'mejorSabor()'<strong> con un string esperado. En este caso, se espera que la función retorne el valor de 'melocotón'.
    </li>
    <li>
      Compara que lo que retorna la función sea un valor diferente de 'coco'.
    </li>
    <li>
      Verifica que exista un contenedor con la clase navbar. 
    </li>
  </ol>
  
  
