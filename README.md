Projecte Throttle
Descripció
Aquest projecte implementa una funció throttle en TypeScript, utilitzant la metodologia de desenvolupament dirigit per proves (TDD).
La funció throttle és útil per limitar la freqüència d'execució d'una funció en resposta a esdeveniments repetits, permetent que s'executi a intervals de temps regulars. Això és especialment útil en situacions com ara esdeveniments de desplaçament,
actualitzacions d'interfícies d'usuari o crides a funcions costoses.

Instal·lació
Clona aquest repositori al teu ordinador local:

git clone https://github.com/aleot22/sprint2.2/tree/main/workspace/sprint2.2
cd projecte-throttle

Implementació de la funció throttle
La funció throttle es troba al fitxer src/throttle.ts. Aquesta funció pren com a paràmetres una funció func i un interval de temps limit en mil·lisegons, i retorna una nova funció que es pot cridar a intervals regulars definits per limit.

Test-Driven Development (TDD)
Per assegurar-nos que la funció throttle funciona correctament, hem utilitzat TDD. Els tests es troben al fitxer tests/throttle.test.ts.

Executar els tests
Per executar els tests, utilitza el següent comandament:
npm test
Els tests utilitzen el framework de testing Jest. Si no el tens instal·lat, pots afegir-lo com a dependència al projecte:

npm install --save-dev jest @types/jest ts-jest
