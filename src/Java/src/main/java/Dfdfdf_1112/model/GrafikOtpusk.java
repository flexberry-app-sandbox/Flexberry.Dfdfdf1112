package Dfdfdf_1112.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dfdfdf_1112.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ГрафикОтпуск
 */
@Entity(name = "IISDfdfdf_1112ГрафикОтпуск")
@Table(schema = "public", name = "ГрафикОтпуск")
public class GrafikOtpusk {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерДок")
    private Integer номердок;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ДатаНач")
    private Date датанач;

    @Column(name = "КолДней")
    private Integer колдней;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;


    public GrafikOtpusk() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерДок() {
      return номердок;
    }

    public void setНомерДок(Integer номердок) {
      this.номердок = номердок;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Date getДатаНач() {
      return датанач;
    }

    public void setДатаНач(Date датанач) {
      this.датанач = датанач;
    }

    public Integer getКолДней() {
      return колдней;
    }

    public void setКолДней(Integer колдней) {
      this.колдней = колдней;
    }


}