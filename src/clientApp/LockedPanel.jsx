'use client'

import { data } from '@/data/data'
import { hexDecrypt, hexEncrypt } from '@/utils/hexCipher'
import { useState } from 'react'

const ItemCard = ({ name, other }) => {
	return (
		<div style={{ padding: '1rem', borderRadius: '.6rem', border: 'solid 1px gray' }}>
			<b>{name}</b>
			<table>
				<tbody>
					{Object.keys(other).map((key, index) => (
						<tr key={index}>
							<td>
								<b>{key}</b>
							</td>
							<td>
								<code>{other[key]}</code>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
const LockedPanel = () => {
	const [password, setPassword] = useState('')
	const [account, setAccount] = useState([])
	const handleOpen = () => {
		const dec = hexDecrypt(data, password)
		if (dec.slice(0, password.length) === password) {
			const _data = dec.replace(password, '')
			let dataDec = []
			try {
				dataDec = JSON.parse(_data)
			} catch (error) {
				alert('password not match!')
			}
			setAccount(dataDec)
		} else {
			alert('password not match!')
		}
	}
	const handleUpdate = () => {
		const enc = hexEncrypt(`${password}${JSON.stringify(account)}`, password)
		console.log(enc)
	}

	return (
		<>
			<input type="password" onChange={(e) => setPassword(e.target.value)} />
			<button onClick={handleOpen}>Open</button>
			<button onClick={handleUpdate}>Update</button>
			<div style={{ display: 'flex', gap: '1rem' }}>
				{account.map(({ name, ...other }, index) => (
					<ItemCard key={index} name={name} other={other} />
				))}
			</div>
		</>
	)
}
export default LockedPanel
