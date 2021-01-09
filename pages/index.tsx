export default function Home() {
  return (
    <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center',flexDirection: 'column'}}>
      <h1>
        Gerador de Imagens:
      </h1>

      <div>
        <img width={600} height={600} src="http://localhost:3000/api/image-generator?name=davidlpc1" />
      </div>

      <a href="http://localhost:3000/api/image-generator?name=davidlpc1">
      http://localhost:3000/api/image-generator?name=davidlpc1
      </a>
    </div>
  )
}