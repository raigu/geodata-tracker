class DebugView {

    constructor() {
        this.element = null
    }

    toggle() {
        if (!this.element) {
            const element = document.createElement('pre')

            element.style.position = 'absolute'
            element.style.right = '0'
            element.style.margin = '0'
            element.style.background = 'white'

            // prevent expanding over the edge, make scrollable
            element.style.maxHeight = '100vh'
            element.style.overflow = 'scroll'

            this.element = element

            document.body.appendChild(this.element)

            this.log('Debug View:')
        }


        if (this.element.style.display === 'block') {
            this.element.style.display = 'none'
        } else {
            this.element.style.display = 'block'
        }
    }

    log(message) {
        if (!this.element) {
            return;
        }

        // Sample, how to add a content
        this.element.appendChild(
            document.createTextNode(JSON.stringify(message) + "\n")
        )
    }

}
