const NodeRSA = require('node-rsa');

//const key = new NodeRSA({b: 1024}); 
let secret = "Este es el mensaje secreto y encriptado";

//var encryptedString = key.encrypt(secret, 'base64');
//console.log(encryptedString);

//var decryptedString = key.decrypt(encryptedString, 'utf8');
//console.log(decryptedString);

//var public_key = key.exportKey('public');
//var private_key = key.exportKey('private');

//console.log(public_key + '\n' + private_key);


public_key = '-----BEGIN PUBLIC KEY-----\n' +
'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCkE8hvQc2LdGJ+mtiilSpvDv6Z \n' +
'W0pGy97lPhBxjYuTsNsawd1J+6WkJGi8nsuwBOeUvUmqd/0AIZtW8moQ4A9eeFLV \n' +
'ZVpxoT1IL/QeeLdiAX2Ufcifs6yQpSnvwqq2Zsd5Ftu4FhCo7K4aroDJQDPeIs8i \n' +
'2JkoDJu06cnl9gwqFwIDAQAB \n' +
'-----END PUBLIC KEY-----';

private_key =  ' -----BEGIN RSA PRIVATE KEY----- \n' +
'MIICXAIBAAKBgQCkE8hvQc2LdGJ+mtiilSpvDv6ZW0pGy97lPhBxjYuTsNsawd1J \n' +
'+6WkJGi8nsuwBOeUvUmqd/0AIZtW8moQ4A9eeFLVZVpxoT1IL/QeeLdiAX2Ufcif \n' +
's6yQpSnvwqq2Zsd5Ftu4FhCo7K4aroDJQDPeIs8i2JkoDJu06cnl9gwqFwIDAQAB \n' +
'AoGBAJSQqSM8VO4ZwvlaIiAMqrCGxjd79qRmAvxVlzQKc0CWmb3/nexYZKJcqU1p \n' +
'B4vo1PvT7Tjijn4o7+vpceq3xpFOHsySfYxbkhoE1VdWwuPofANPGoF3sNzWbkEb \n' +
'4DLSV1tkPlqUlH480D/E3FzoD7ZedX2ufQ85c7af09cc5URRAkEA8vZJL29jXCMN \n' +
'kNLa/ziIlXHTrBZbJOhCozgbgzBHzyuv7/6H3swCwcO+GR8xO8qZT4+penFvPnZw \n' +
'eVW5o7wu+QJBAKzhz1yi4eHVji9dQzuJQHzFlglENI9yb0oKZ2ZNqX+MXlVXImPA \n' +
'AGG4FDKWw/ZuVx7OB/+9LvF7cuLlF/gPlY8CQAlad+jOlfmnE8+efnXS3Fc8gZSf \n' +
'a7TZCC+2akC7rBgKq4RGvT5ThkulWH0pGUEfBJXuhuzCzzCNaLkTFsl55ikCQHhU \n' +
'9DBWb0LxkfYFxDY8YlZ2cOgiQTNXQ38VnsLma4QL/90GuTkU+y8JIYXUyrFMO/eF \n' +
'EKxA0dvjQSQMsZJHxqECQErWwYEqpjEHiTM6U9lMUMPLOg16mxNvY9Bglhl3Zpci \n' +
'7AIUKNdF4JYHIg4KeZdgNeT4NASBGr6f5IBRMpnv1Fs= \n' +
'-----END RSA PRIVATE KEY-----'

let key_private = new NodeRSA(private_key);

let key_public = new NodeRSA(public_key);

//public key for encryption parametro para llamar al mensaje secreto y encriptarlo

var encryptedString = key_public.encrypt(secret, 'base64');

console.log(encryptedString);

//private key for decryption esta llave sirve para desencriptar el mensaje oculto

//var decryptedString = key_private.decrypt('bPZ/ZC+nJIyAvweetDMIx8X9AHnoHBdFbdbhJqGfrKvl3UvWvgp8LXsd2VAzX743QGhaG3SbpZNQoU1c2xU//MjnV4hO8/YJzsvMgW73hncxsEn+kS+oKjcwIbaBW4jc3nUIRnlPAyyZ78FPuoYEH3UwBdLvezWWZDGjSv7oXwk=', 'utf8');

var decryptedString = key_private.decrypt(encryptedString, 'utf8');
console.log(decryptedString);


//public key  con esta llave no se puede desencriptar el mensaje

console.log(key_public.decrypt(encryptedString,'utf9'));