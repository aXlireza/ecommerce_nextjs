import CustomInput from "@/components/Form/CustomInput"
import CustomSelect from "@/components/Form/CustomSelect"
import Heading from "@/components/Heading"

type Props = {
}

export default function WeightCalculator({ }: Props) {
  return (<section className={`divide-y samen-border bg-white`}>
    <Heading text={`محاسبه آنلاین وزن`} underline={'partial'} />
    <div className="flex flex-col gap-2 p-5">
      <div className="flex flex-row w-full gap-5">
        <div className="flex flex-col justify-around">
          <label htmlFor="">سایز</label>
          <label htmlFor="">استاندارد</label>
          <label htmlFor="">مقدار</label>
        </div>
        <div className="flex flex-col w-full gap-2">
          {/* Size */}
          <CustomSelect fullyRounded={true}
            // label="سایز"
            id="weightcalculator_size"
            options={[
              {
                text: '14',
                value: '14'
              },{
                text: '15',
                value: '15'
              },{
                text: '14',
                value: '14'
              },{
                text: '15',
                value: '15'
              },{
                text: '14',
                value: '14'
              },{
                text: '15',
                value: '15'
              },
            ]}
          />

          {/* Standard */}
          <CustomSelect fullyRounded={true}
            // label="استاندارد"
            id="weightcalculator_standard"
            options={[
              {
                text: 'A12',
                value: 'A12'
              },{
                text: '15',
                value: '15'
              },{
                text: '14',
                value: '14'
              },{
                text: '15',
                value: '15'
              },{
                text: '14',
                value: '14'
              },{
                text: '15',
                value: '15'
              },
            ]}
          />

          {/* Quantity */}
          <div className="flex flex-row items-center gap-3">
            <CustomInput
              id="weightcalculator_quantity"
              // label="مقدار"
              fullyRounded={true}
              placeholder="۱۰" 
              min={1}
              type="number"
              customclasses="w-20"
            />
            <CustomSelect fullyRounded={true}
              id="weightcalculator_quantity_type"
              options={[
                {
                  text: 'شاخه',
                  value: 'A12'
                },{
                  text: '15',
                  value: '15'
                },{
                  text: '14',
                  value: '14'
                },{
                  text: '15',
                  value: '15'
                },{
                  text: '14',
                  value: '14'
                },{
                  text: '15',
                  value: '15'
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Result */}
      <CustomInput
        id="weightcalculator_result"
        fullyRounded={true}
        placeholder="۰" 
        type="text"
        customclasses="w-full border-samen-orange"
        disabled={true}
      />

    </div>
  </section>)
}
