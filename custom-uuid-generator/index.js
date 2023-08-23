// index.js
const crypto = require('crypto');

function generateUUID(outputType = 'string', includeTimestamp = false) {
  if (outputType === 'integer') {
    // Generate a time-based UUID as an integer
    const timestampBuffer = crypto.randomBytes(6); // 48 bits for the timestamp
    const uuidInteger = timestampBuffer.readUIntBE(0, 6);
    return uuidInteger;
  }  else {
    // Generate a random UUID
    const uuid = crypto.randomBytes(16).toString('hex');
    
    // Format the UUID as a string
    let result = `${uuid.substr(0, 8)}-${uuid.substr(8, 4)}-4${uuid.substr(13, 3)}-a${uuid.substr(16, 3)}-${uuid.substr(19)}`;
    
    if (includeTimestamp) {
      // Add a timestamp to the UUID
      const timestamp = new Date().getTime();
      result = `${timestamp}-${result}`;
    }
    
    return result;
  }
}

module.exports = generateUUID;

  