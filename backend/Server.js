const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const uri = 'your-mongodb-connection-string';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Invoice schema
const invoiceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  client: { type: String, required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

// Routes
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error creating user', error: err });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: 'Login successful', userId: user._id });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    res.status(400).json({ message: 'Error logging in', error: err });
  }
});

app.post('/invoices', async (req, res) => {
  const { userId, client, amount, dueDate } = req.body;
  try {
    const invoice = new Invoice({ userId, client, amount, dueDate });
    await invoice.save();
    res.status(201).json({ message: 'Invoice created successfully', invoice });
  } catch (err) {
    res.status(400).json({ message: 'Error creating invoice', error: err });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
