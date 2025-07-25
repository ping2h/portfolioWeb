import accountService from '../services/accountService.js';

export function deposit(req, res) {
  try {
    console.log("进入了deposit controller!!");
    const { id, amount } = req.body;
    console.log(`id: ${id}, amount: ${amount}`);
    const acc = accountService.deposit(id, amount);
    console.log("储存完成");
    res.json(acc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export function withdraw(req, res) {
  try {
    const { id, amount } = req.body;
    const acc = accountService.withdraw(id, amount);
    res.json(acc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
