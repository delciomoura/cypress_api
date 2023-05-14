import { faker } from '@faker-js/faker';

let randomCharacter = (() => {
    let length = 4,
        charset = "abcdefghijklmnopqrstuvwxyz0123456789",
        letterNumber = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        letterNumber += charset.charAt(Math.floor(Math.random() * n));
    }
    return letterNumber;
});

let letterNumber = randomCharacter();
let randomEmail = `delcio${letterNumber}@gmail.com`;

const contact = {
    name: faker.person.fullName(),
    number: faker.phone.number('849########'),
    description: faker.word.words(3)
};
const user = {
    email: randomEmail,
    password: 'delcio123'
};

export { randomEmail, contact, user };
