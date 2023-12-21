import CustomRadio from "@/components/Form/CustomRadio"
import CustomSelect from "@/components/Form/CustomSelect"
import Heading from "@/components/Heading"

type Props = {
  pageTitle: string,
}
export default function Usage({ pageTitle }: Props) {
  return (<section className={`divide-y samen-border bg-white`}>
    <Heading text={`${pageTitle} را برای چه منظوری نیاز دارید؟`} underline={'partial'} />
    <div className="flex flex-col gap-2 p-5">
      <CustomSelect fullyRounded={true} options={[
        {
          text: 'انتخاب مورد مصرف',
          value: "0"
        },{
          text: 'انتخاب مورد مصرف',
          value: "0"
        },{
          text: 'انتخاب مورد مصرف',
          value: "0"
        },
      ]}
      />
      <p>برای آرماتور بندی، علاوه بر میلگرد آجدار به موارد زیر نیاز خواهید داشت:</p>
      <CustomRadio id="item1" value="item1" label="سیم مفتول" name="usage_radio" />
      <CustomRadio id="item2" value="item2" label="سیم مفتول" name="usage_radio" />
      <CustomRadio id="item3" value="item3" label="سیم مفتول" name="usage_radio" />
      <CustomRadio id="item4" value="item4" label="سیم مفتول" name="usage_radio" />
      <CustomRadio id="item5" value="item5" label="سیم مفتول" name="usage_radio" />
    </div>
  </section>)
}
