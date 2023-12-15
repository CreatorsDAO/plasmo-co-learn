module example::counter {

    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::TxContext;

    struct CounterValue has key,store  {
        id:UID,
        value: u64,
    }

    fun init(ctx:&mut TxContext) {
        transfer::share_object(CounterValue{
            id:object::new(ctx),
            value:0
        });
    }

    entry fun add_value(counter:&mut CounterValue,v:u64){
        counter.value = counter.value + v;
    }

}
