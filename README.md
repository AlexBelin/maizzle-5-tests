# maizzle-5-tests

I tried _*npm run build*_ on various content paths and got some strange behaviour:

- src/emails/\*\*/\*.html => all messages successfully built
- src/emails/TRANSACTIONAL/\*\*/\*.html => all messages successfully built
- src/emails/TRANSACTIONAL/{environment}/{locale}/DESIGN_1/\*\*/\*.html => all messages successfully built
- src/emails/TRANSACTIONAL/{environment}/{locale}/DESIGN_1/SCOPE/\*\*/\*.html => all messages successfully built
- src/emails/TRANSACTIONAL/{environment}/{locale}/DESIGN_1/SCOPE/MESSAGE_2/\*.html => 0 messages built
- src/emails/TRANSACTIONAL/{environment}/{locale}/DESIGN_1/SCOPE/MESSAGE_2/transactional.html => 1 message successfully built

*Note that this behaviour only occures with npm run build command. npm run dev works well with all these paths*
