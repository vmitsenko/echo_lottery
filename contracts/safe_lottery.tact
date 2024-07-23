import "@stdlib/deploy";

message EchoContract {
    original_sender: Address;
}

contract SafeLottery with Deployable {

    receive("donation")
    {
        
    }

    receive(msg: EchoContract) {
      
        send(SendParameters{
                to: sender(),
                bounce: true,
                value: 0,
                mode: SendRemainingValue | SendIgnoreErrors,
                body: EchoContract{original_sender: msg.original_sender}.toCell()
            });
   }
}

