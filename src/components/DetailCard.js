function DetailCard({weather_icon, data}) {

  const {clouds, main, weather} = data.list[0]
  return (
    <div className="container p-4 flex items-center justify-center shadow-lg roundedfd-lg bg-white h-1/3 mb-auto">
      <div className="my-auto">
        <p className="font-bold text-5xl text-pink-800 mb-2">{Math.round(main.temp)}&deg;C</p>
      </div>
    </div>
  )
}

export default DetailCard