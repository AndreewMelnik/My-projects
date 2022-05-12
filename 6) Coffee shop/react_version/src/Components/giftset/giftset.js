import "./giftset.css";

const Giftset = () => {

    return (
        <div class="giftset" id="giftset">
            <div class="giftset-bg"></div>

            <div class="title">
                <p>Best Gift For Best Friend</p>
                <h1>GIFTSET</h1>
            </div>

            <GiftsetToggler {...settings}>
              {serverData.map((card) =>(
                <GiftsetContent key={card.id} {...card}/>
                ))}
            </GiftsetToggler>


        </div>
    )
}

onToggleIncrease = (id) => {
    this.setState(({serverData}) =>({
      serverData: serverData.map(item => {
      if (item.id === id){
        return {...item, increase: !item.increase}
      }
      return item;
    })
  }))
  }




const giftsetData = [
    {name: "GIFTSET “CÀ PHÊ PHIN VIỆT NAM”", price: "$ 20.00", src:giftset1, beans: "Độ cao", height: "700 - 800m ",id: 1, 
    description: "Món quà tuyệt vời dành cho người sành cà phê.Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ nhữngnghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những táchcà phê tinh khiết chỉ dành riêng cho bạn."},
    {name: "GIFTSET “TỐ NỮ", price: "$ 23.00", src:giftset2, beans: "Độ cao", height: "700 - 800m ", id: 2, 
    description: "Món quà tặng rất Việt Nam: thể hiện tính truyền thống từ sản phẩm cho tới bao bì và được đặt trong thiết kế hiện đại – độc đáo!.Bộ giftset Tố Nữ tiêu chuẩn bao gồm: – Hộp đựng 2 tầng bằng giấy kraft, với thiết kế lấy ý tưởng từ bộ tranh Tố Nữ – thuộc dòng tranh dân gian Hàng Trống– Gói cà phê Revo Morning 250gr – với gu vị cân bằng, là món quà tuyệt vời dành cho những người nước ngoài muốn thử hương vị cà phê Việt Nam chất lượng cao– Phin mạ màu cao cấp từ Revo Coffee"},
    {name: "MODERN VIETNAMESE COFFEE BLEND BOX", price: "$ 25.00",src:giftset3,beans: "Độ cao", height: "700 - 800m ", id: 3, 
    description: "Trên các cao nguyên của Việt Nam.Cây cà phê được chăm chút bởi hơi nước , ánh sáng , gió , mưa  và sự cần cù của người nông dân chân chất, kết tinh thành những hạt cà phê chất lượng, đậm đà, đặc trưng…Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.Bộ blend box gồm 3 hương vị đặc trưng của Revo: Revo Origin, Revo Natural, Revo Honey."},
]

      class GiftsetContent extends Component  {
        render() {
         const {name, price, description,src,id} = this.props;
          return(
                  <div class="tabs-content">
                     <div id={id} className="tabs-content__item">
                        <img src={src} alt={name}/>
                        <div className="giftset__content">
                           <div className="giftset__price price">{price}</div>
                           <div className="giftset__name name">{name}</div>
                           <div className="giftset__description description">{description}</div>
                           <div className="giftset__info">
                              <div className="giftset__info_1">
                                 <img src={Coffee} alt=""/>
                                 <div className="info__text">
                                    <h1 className="info__title">Beans</h1>
                                    <h2 className="info__subtitle">{beans}</h2>
                                 </div>
                              </div>
                              <div className="giftset__info_2">
                                 <img src={Mountain} alt=""/>
                                 <div className="info__text">
                                    <h1 className="info__title">Height</h1>
                                    <h2 claclassNamess="info__subtitle">{height}</h2>
                                 </div>
                              </div>
                           </div>
                           <div className="giftset__link">
                              <button className="giftset__btn buy">BUY NOW</button>
                              <button className="giftset__btn desc">MORE</button>
                           </div>
                           </div>
                        </div>
                 </div> 
            )}
    }    
        
