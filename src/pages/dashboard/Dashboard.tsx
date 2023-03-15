import { DetailsToolbar } from "../../shared/components"
import { BasePageLayout } from "../../shared/layouts"

export const Dashboard: React.FC = () => {
    return (
        <BasePageLayout
            title="Página Inicial"
            ListingToolbar={<DetailsToolbar showButtonSaveAndReturn />}
        >
            Teste
        </BasePageLayout>
    )
}
