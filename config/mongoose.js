



const mongoose = require('mongoose');

const uri=('mongodb+srv://routmrutyunjay:Raja1234@cluster0.apdxlp7.mongodb.net/?retryWrites=true&w=majority');

 const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
 

    console.log('Connected to Database :: MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};        
module.exports = connectToDatabase;
