export default function healthController(req, res){
  res.json({ status: 'ok', uptime: process.uptime(), timestamp: Date.now() })
}
