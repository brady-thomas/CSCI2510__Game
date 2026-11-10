class TextLabel extends Component{
    fillStyle = "white"

    text = "[BLANK]"

    font = "10px Arial" 

    textAlign = "left"

    textBaseline = "alphabetic"

    draw(ctx) {
        


        ctx.save()

        // ctx.translate(this.transform.position.x, this.transform.position.y)
        // ctx.scale(this.transform.scale.x, this.transform.scale.y)
        // ctx.rotate(this.transform.rotation) 
 

        ctx.fillStyle = this.fillStyle
        ctx.font = this.font
        ctx.textAlign = this.textAlign
        ctx.textBaseline = this.textBaseline

        ctx.fillText(this.text, 0,0)

        ctx.restore()
    }

}