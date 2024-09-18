import PropTypes from 'prop-types';
import { Buttonbuy } from './components/Element/Button';
// Pastikan penulisan sesuai dengan nama folder di sistem file
import { Input } from './components/Element/Input';  // Gunakan 'Input' dengan huruf besar
import { Label } from './components/Element/Input';  // Gunakan 'Label' dengan huruf kecil

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center gap-x-3">
      <Buttonbuy variant="bg-red-700">buy</Buttonbuy>
      <Buttonbuy variant="bg-slate-700">login</Buttonbuy>
      <Buttonbuy></Buttonbuy>

      <Input variant="text-black" type="text" placeholder="username" />
      <Input variant="text-black" type="text" placeholder="password" />
      <Label variant="text-black">username</Label>
      <Label variant="text-black">password</Label>
    </div>
  )
}

export default App;